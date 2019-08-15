export const setWeather = weather => {
  return {
    type: 'SET_WEATHER',
    weather
  }
}

export const getWeather = () => {
  return dispatch => {
    return fetch("/api/location/search/?query=(query)", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          console.log(response.data)
          dispatch(setWeather(response.data))
        }
      })
      .catch(console.log)
  }
}
