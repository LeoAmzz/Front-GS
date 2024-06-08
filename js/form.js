const fetchData = async (latitude, longitude, depth) => {
    const url = "https://ocean.amentum.io/rtofs";
    const apiKey = "lopX5xtFTnFtzVVZaPXVlw8hSaYIZ5ua";
    const params = { latitude, longitude, depth };
  
    try {
      const queryString = new URLSearchParams(params).toString();
      const requestUrl = `${url}?${queryString}`;
      const response = await fetch(requestUrl, {
        headers: {
          "API-Key": apiKey,
        },
      });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, ${text}`);
      }
      const responseData = await response.json();
      const values = extractValues(responseData);
      return values;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  };
  
  const extractValues = (data) => {
    const translatedNames = {
      current_u: "Componente Leste da velocidade da água",
      current_v: "Componente Norte da velocidade da água",
      salinity: "Salinidade",
      temperature: "Temperatura",
    };
  
    const values = {};
  
    Object.entries(data).forEach(([key, value]) => {
      const translatedName = translatedNames[key] || key; // Use translated name, or fallback to original key
      if (
        value &&
        typeof value === "object" &&
        "value" in value &&
        "units" in value
      ) {
        const formattedValue =
          value.value !== null ? value.value.toFixed(1) : "N/A";
        values[translatedName] = `${formattedValue} ${value.units}`;
      }
    });
  
    return values;
  };
  
  const displayResponse = (data) => {
    const responseOutput = document.getElementById("responseOutput");
    responseOutput.innerHTML = "";
  
    const container = document.createElement("div");
    container.classList.add("response-container");
  
    for (const [key, value] of Object.entries(data)) {
      const entry = document.createElement("div");
      entry.textContent = `${key}: ${value}`;
      container.appendChild(entry);
    }
  
    responseOutput.appendChild(container);
  };
  
  const displayError = (errorMessage) => {
    const preElement = document.getElementById("responseOutput");
    preElement.textContent = `Error: ${errorMessage}`;
  };
  
  const fetchDataAndDisplay = async () => {
    const latitudeInput = document.getElementById("lat");
    const longitudeInput = document.getElementById("long");
    const depthInput = document.getElementById("prof");
  
    const latitude = parseFloat(latitudeInput.value);
    const longitude = parseFloat(longitudeInput.value);
    const depth = parseFloat(depthInput.value);
  
    try {
      const responseData = await fetchData(latitude, longitude, depth);
      displayResponse(responseData);
    } catch (error) {
      displayError(error.message);
    }
  };
  
  document
    .getElementById("pegarInfo")
    .addEventListener("click", fetchDataAndDisplay);
  