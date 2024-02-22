import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, useDisclosure, Avatar } from "@nextui-org/react";
import ModalLogin from "./ModalLogin";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import teldip from "../../assets/teldip.jpeg"

export default () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

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

    return (
        <Navbar className="mt-2" onMenuOpenChange={setIsMenuOpen}>
            <ModalLogin isOpen={isOpen} onOpenChange={onOpenChange} />
            <NavbarContent>
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
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Inicio
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#" aria-current="page">
                        Firma digital
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#" aria-current="page">
                        Tarjeta digital
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Certificado medico
                    </Link>
                </NavbarItem>
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
                                    Perfil
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