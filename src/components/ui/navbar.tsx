import { Select, Flex, Link, Button, Avatar, Heading } from "@radix-ui/themes"
import { IoMdNotificationsOutline } from "react-icons/io"
import { AiFillFund } from "react-icons/ai"


const Navbar = () => {
    return (
        <div className="my-2 flex items-center justify-between mx-5">
            <div className="flex items-center gap-2">
                <AiFillFund className="text-4xl" />
                <Flex gap="2">
                    <Avatar
                        radius="full"
                        size="1"
                        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                        fallback="S"
                        
                    />
                    <Heading size="3" className="text-sm">Kay Bond</Heading>
                </Flex>
                <Select.Root defaultValue='user1' size="1">
                    <Select.Trigger variant="soft" placeholder="Select a Team" color="gray" />
                    <Select.Content color="gray" position="popper">
                        <Select.Group>
                            <Select.Label>Personal Account</Select.Label>
                            <Select.Item value="user1">Team Lead</Select.Item>
                        </Select.Group>
                        <Select.Separator />
                        <Select.Group>
                            <Select.Label>Teams</Select.Label>
                            <Select.Item value="user2">Second Team</Select.Item>
                            <Select.Item value="user3">Third Team</Select.Item>
                        </Select.Group>
                    </Select.Content>
                </Select.Root>
            </div>
            <Flex gap="3">
                <Flex direction="row" gap="2">
                    <Button color="gray" highContrast size="2" variant="soft" radius="large" >Feedback</Button>
                    <Button color="gray" highContrast size="2" variant="soft" radius="large" >Changelog</Button>
                    <Button color="gray" highContrast size="2" variant="soft" radius="large" >Help</Button>
                    <Button color="gray" highContrast size="2" variant="soft" radius="large" >Docs</Button>
                </Flex>
                <Link><IoMdNotificationsOutline className="text-2xl" /></Link>
                <div>
                    <Avatar
                        radius="full"
                        size="1"
                        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                        fallback="S"
                    />
                </div>
            </Flex>
        </div>
    )
}

export default Navbar