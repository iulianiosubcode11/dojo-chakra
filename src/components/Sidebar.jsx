import { List, ListItem, ListIcon, Box, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { CalendarIcon, EditIcon, AtSignIcon } from "@chakra-ui/icons";
import { useState } from "react";

export default function Sidebar() {
  const [hoveredItem, setHoveredItem] = useState(null);

  // Color variables
  const activeColor = "#FFE100";
  const inactiveColor = "white";

  const NavItem = ({ to, icon, children }) => {
    return (
      <ListItem>
        <NavLink
          to={to}
          style={({ isActive }) => ({
            color: isActive ? activeColor : inactiveColor,
          })}
        >
          {({ isActive }) => (
            <Box
              display="flex"
              alignItems="center"
              color={
                isActive
                  ? activeColor
                  : hoveredItem === to
                  ? activeColor
                  : inactiveColor
              }
              onMouseEnter={() => setHoveredItem(to)}
              onMouseLeave={() => setHoveredItem(null)}
              transition="color 0.2s"
            >
              <ListIcon
                as={icon}
                color={
                  isActive || hoveredItem === to ? activeColor : inactiveColor
                }
                transition="color 0.2s"
              />
              {children}
            </Box>
          )}
        </NavLink>
      </ListItem>
    );
  };

  return (
    <Flex
      flexDirection={{ base: "row", lg: "column" }}
      justifyContent={{ base: "center", lg: "flex-start" }}
      alignItems={{ base: "center", lg: "flex-start" }}
      h={{ base: "auto", lg: "100%" }}
      position={{ base: "static", lg: "fixed" }} // Fixed only on desktop
      top={{ lg: "0" }} // Adjust to your needs
      left={{ lg: "0" }} // Adjust to your needs
      p={{ base: "0", lg: "32px" }}
    >
      <Flex
        as={List}
        color={inactiveColor}
        fontSize="1.2em"
        gap={{ base: 6, lg: 3 }}
        F
        flexDirection={{ base: "row", lg: "column" }}
        width="100%"
        maxWidth={{ base: "450px", lg: "100%" }}
        justifyContent={{ base: "space-between", lg: "flex-start" }}
        alignItems={{ base: "center", lg: "flex-start" }}
      >
        <NavItem to="/" icon={CalendarIcon}>
          Dashboard
        </NavItem>
        <NavItem to="/create" icon={EditIcon}>
          Create
        </NavItem>
        <NavItem to="/profile" icon={AtSignIcon}>
          Profile
        </NavItem>
        <NavItem to="/pie" icon={CalendarIcon}>
          Pie
        </NavItem>
        <NavItem to="/old" icon={CalendarIcon}>
          Old
        </NavItem>
      </Flex>
    </Flex>
  );
}
