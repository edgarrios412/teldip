import ContactUs from "../components/ContactUs"
import Footer from "../components/layout/Footer"
import NavBar from "../components/layout/NavBar"
import { Listbox, ListboxItem, User, Input } from "@nextui-org/react";
import { ListboxWrapper } from "./ListboxWrapper";
import NavBarPanel from "../components/layout/NavBarPanel";

const Panel = () => {

    return (
        <>
            <NavBarPanel />
            <div style={{ height: "100vh", margin:"0 auto" }}>
                {/* <div className="flex flex-col gap-4">
                    <ListboxWrapper>
                        <Listbox
                            aria-label="Listbox Variants"
                            color={"default"}
                            variant={"bordered"}
                        >
                            <ListboxItem key="new">New file</ListboxItem>
                            <ListboxItem key="copy">Copy link</ListboxItem>
                            <ListboxItem key="edit">Edit file</ListboxItem>
                            <ListboxItem key="delete" className="text-danger" color="danger">
                                Delete file
                            </ListboxItem>
                        </Listbox>
                    </ListboxWrapper>
                </div> */}
                <Input
                    isClearable
                    type="email"
                    label="Email"
                    variant="bordered"
                    placeholder="Enter your email"
                    defaultValue="junior@nextui.org"
                    onClear={() => console.log("input cleared")}
                    className="max-w-xs"
                />
            </div>
            <Footer />
        </>
    )
}

export default Panel