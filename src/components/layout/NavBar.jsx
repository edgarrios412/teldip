import React, { useContext, useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, useDisclosure, Avatar, Tabs, Tab } from "@nextui-org/react";
import ModalLogin from "./ModalLogin";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Link as LinkRoute, useNavigate } from "react-router-dom"
import teldip from "../../assets/teldip.jpeg"
import { NavigationContext } from "../../utils/context/Navigation/NavigationContext";

export default () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const { edad, setEdad } = useContext(NavigationContext)

    const [page, setPage] = useState(1)

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    const navigate = useNavigate()

    return (
        <Navbar className="mt-2" onMenuOpenChange={setIsMenuOpen}>
            <ModalLogin isOpen={isOpen} onOpenChange={onOpenChange} />
            <NavbarContent justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:invisible"
                />
                <NavbarBrand>
                    {/* <AcmeLogo /> */}
                    <p className="font-bold text-inherit">TELDIP</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <Tabs color="secondary" variant={"light"} aria-label="Tabs variants" onSelectionChange={(e) => navigate("/"+e)}>
                    {/* <LinkRoute onClick={() => setPage(1)} to="/"> */}
                        <Tab key="" onSelectionChange={() => alert("/")} title="Inicio" />
                    {/* </LinkRoute> */}
                    {/* <LinkRoute to="/servicios" onClick={() => setPage(2)}> */}
                    <Tab key="servicios" onSelectionChange={() => navigate("/servicios")} title="Servicios" />
                    {/* </LinkRoute> */}
                    <Tab key="contacto" onSelectionChange={() => navigate("/contacto")} title="Contacto" />
                </Tabs>
                {/* <NavbarItem isActive={page == 1}>
                    <LinkRoute onClick={() => setPage(1)} to="/">
                        Inicio
                    </LinkRoute>
                </NavbarItem>
                <NavbarItem isActive={page == 2}>
                    <LinkRoute to="/servicios" onClick={() => setPage(2)}>
                        Servicios
                    </LinkRoute>
                </NavbarItem>
                <NavbarItem isActive={page == 3}>
                    <LinkRoute color="foreground" onClick={() => setPage(3)} to="/contacto">
                        Contacto
                    </LinkRoute>
                </NavbarItem> */}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    {false ? <Button onPress={onOpen} as={Link} color="primary" href="#" variant="flat">
                        Ingresar
                    </Button> :
                        <Dropdown placement="bottom-end">
                            <DropdownTrigger>
                                <Avatar
                                    isBordered
                                    className="transition-transform"
                                    name="Jose"
                                // src="https://aui.atlassian.com/aui/8.6/docs/images/avatar-project.svg"
                                />
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Profile Actions" variant="flat">
                                <DropdownItem key="profile" className="h-14 gap-2">
                                    <p className="font-semibold">Iniciado como</p>
                                    <p className="font-semibold">jose@teldip.com</p>
                                </DropdownItem>
                                <DropdownItem key="settings" href="/panel">
                                    Panel
                                </DropdownItem>
                                <DropdownItem key="configurations">Configuracion</DropdownItem>
                                <DropdownItem key="help_and_feedback">
                                    Soporte
                                </DropdownItem>
                                <DropdownItem key="logout" color="danger">
                                    Cerrar sesion
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    }
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}