import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { List } from 'react-native-paper'

import { CleaningServiceInfoCard } from '../components/cleaningService-info-card.component'

import { SafeArea } from '../../../components/utility/safe-area.component'

export const CleaningServiceDetailScreen = ({ route }) => {
  const [indoor, setIndoor] = useState(false)
  const [outdoor, setOutdoor] = useState(false)
  const [heavyLifting, setHeavyLifting] = useState(false)
  const [others, setOthers] = useState(false)

  const { cleaningService } = route.params
  return (
    <SafeArea>
      <CleaningServiceInfoCard cleaningService={cleaningService} />
      <ScrollView>
        <List.Accordion
          title='Indoor Tasks'
          left={(props) => <List.Icon {...props} icon='bread-slice' />}
          expanded={indoor}
          onPress={() => setIndoor(!indoor)}
        >
          <List.Item title='Laundry' />
          <List.Item title='Interior Walls' />
          <List.Item title='Inside Cabinets' />
          <List.Item title='Interior Windows' />
          <List.Item title='Inside fridge/oven' />
        </List.Accordion>

        <List.Accordion
          title='Outdoor Tasks'
          left={(props) => <List.Icon {...props} icon='hamburger' />}
          expanded={outdoor}
          onPress={() => setOutdoor(!outdoor)}
        >
          <List.Item title='Gardening' />
          <List.Item title='General Cleaning' />
          <List.Item title='Outside Windows' />
          <List.Item title='Car Washing' />
        </List.Accordion>

        <List.Accordion
          title='Heavy Lifting'
          left={(props) => <List.Icon {...props} icon='food-variant' />}
          expanded={heavyLifting}
          onPress={() => setHeavyLifting(!heavyLifting)}
        >
          <List.Item title='Move things around' />
        </List.Accordion>

        <List.Accordion
          title='Others'
          left={(props) => <List.Icon {...props} icon='cup' />}
          expanded={others}
          onPress={() => setOthers(!others)}
        >
          <List.Item title='Consultancy' />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  )
}
