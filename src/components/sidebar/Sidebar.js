import React from 'react'
import { SidebarContainer, Icon, CloseIcon,
    SidebarWrapper, SidebarLink, SidebarMenu,
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='home' onClick={toggle}>HOME</SidebarLink>
                <SidebarLink to='courses' onClick={toggle}>COURSES</SidebarLink>
                <SidebarLink to='campuses' onClick={toggle}>CAMPUS</SidebarLink>
                <SidebarLink to='testimonials' onClick={toggle}>TESTIMONIAL</SidebarLink>
                <SidebarLink to='contact' onClick={toggle}>CONTACT</SidebarLink>
            </SidebarMenu>

        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar