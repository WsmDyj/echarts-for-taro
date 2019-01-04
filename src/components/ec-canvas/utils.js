export const getDataset = data => {
  const dimName = data && data.dimensions && data.dimensions.name || 'dimensions'
  const dimData = data && data.dimensions && data.dimensions.data

  const dimensions = {
    [dimName]: dimData
  }

  let measures = {}

  for (let row of data.measures) {
    Object.assign(measures, {
      [row.name]: row.data
    })
  }

  const source = Object.assign({}, dimensions, measures)

  return {
    source
  }
}
