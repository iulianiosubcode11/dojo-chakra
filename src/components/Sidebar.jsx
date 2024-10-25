import { List, ListItem, ListIcon, Box } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { CalendarIcon, EditIcon, AtSignIcon } from "@chakra-ui/icons"

export default function Sidebar() {
  
  return (
    <List color='white' fontSize='1.2em' spacing={1}>
      <ListItem>
        <NavLink to='/'>
          <Box display='flex' alignItems='center'>
            <ListIcon as={CalendarIcon} />            
            Dashboard
          </Box>
        </NavLink>
      </ListItem>

      <ListItem>
        <NavLink to='/new-task'>
          <Box display='flex' alignItems='center'>
            <ListIcon as={EditIcon} />
            New Task
          </Box>
        </NavLink>
      </ListItem>

      <ListItem>
        <NavLink to='/profile'>
          <Box display='flex' alignItems='center'>
            <ListIcon as={AtSignIcon} />
            Profile
          </Box>
        </NavLink>
      </ListItem>
    </List>
  )
}

