import { ChatIcon, EmailIcon, StarIcon } from "@chakra-ui/icons";
import { Tabs, TabList, Tab, TabPanels, TabPanel, Text, Box, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaRegStar } from "react-icons/fa";

const CustomTab = (props) => (
  <Tab
    color='gray.600'
    textTransform='uppercase'
    fontSize='xs'
    fontWeight='bold'
    _selected={{
      color: 'purple.500',
      borderColor: 'purple.500',
      borderBottom: '2px solid',
      borderBottomColor: 'gray.50',
      bg: 'gray.50',
      borderTopLeftRadius: 'md',
      borderTopRightRadius: 'md',
      marginBottom: '-2px'  // This offsets the 2px bottom border of TabList
    }}
    {...props}
  />
);

export default function Profile() {
  return (
    <Tabs>

      <TabList borderBottomColor="gray.300" borderBottomWidth="2px" >
        <CustomTab>Profile</CustomTab>
        <CustomTab>Tasks</CustomTab>
        <CustomTab>Comments</CustomTab>
      </TabList>

      <Box borderBottomLeftRadius="md" borderBottomRightRadius="md" bg="gray.50">
        <TabPanels textColor="gray.600">
          <TabPanel>
            <List>
              <ListItem >
                <ListIcon as={EmailIcon} color="purple.500" />email#ceva.com
                <Text pt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </ListItem>
            </List>
          </TabPanel>
          <TabPanel>
            <List>
              <ListItem>
                <ListIcon as={ChatIcon} color="purple.500" />Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <Text pt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </ListItem>
            </List>
          </TabPanel>
          <TabPanel>
            <List>
              <ListItem>
                <ListIcon as={StarIcon} color="purple.500" />Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <Text pt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </ListItem>
            </List>
          </TabPanel>
        </TabPanels>
      </Box>

    </Tabs>
  )
}
