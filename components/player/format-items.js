import timelineStore from '../../stores/timeline'

function itemFormatter (timelineName, playerName) {
  return function formatItem (item) {
    return {
      name: item.name,
      fill: true,
      bright: item.source === timelineName,
      onPress: () => timelineStore.addModal(timelineName, {
        modalType: 'steal',
        itemName: item.name,
        playerName
      })
    }
  }
}

export default function formatItems (items, itemNames, timelineName, playerName) {
  return items
  .filter(item => itemNames.includes(item.name))
  .map(itemFormatter(timelineName, playerName))
}
