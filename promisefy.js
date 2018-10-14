const promisefy = api => {
  return (options, ...params) => {
    return new Promise((resolve, reject) => {
      api({...options, success:resolve, fail:reject}, ...params)
    })
  }
}

export default promisefy