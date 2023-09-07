import {  Flex, Link, Text } from "@radix-ui/themes"
import { IoMdNotificationsOutline } from "react-icons/io"
import { AiFillFund } from "react-icons/ai"
import { Select, SelectItem } from "../reactants/select/select"
import { Button } from "../reactants"
import Avatar, { genConfig } from "react-nice-avatar";

const config = genConfig({ sex: "man", hairStyle: "mohawk" });

const Navbar = () => {

    return (
        <div className="my-2 flex items-center justify-between mx-5">
            <div className="flex items-center gap-2">
                <AiFillFund className="text-4xl" />
                <Flex className="flex gap-4">
                    <Avatar className="w-7 h-7" {...config} />
                    <Text>Kay Bond</Text>
                </Flex>
                <Select
                    placeholder="Select an option"
                    className="custom-select"
                >
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                </Select>
            </div>
            <Flex className="flex gap-4 items-center">
                <Flex className="flex flex-row gap-4">
                    <Button size="medium" color="gray" variant="ghost" className='bg-gray-200' >Feedback</Button>
                    <Button size="medium" color="gray" variant="ghost" className='bg-gray-200' >Changelog</Button>
                    <Button size="medium" color="gray" variant="ghost" className='bg-gray-200' >Help</Button>
                    <Button size="medium" color="gray" variant="ghost" className='bg-gray-200' >Docs</Button>
                </Flex>
                <Link><IoMdNotificationsOutline className="text-2xl" /></Link>
                
                    <Avatar className="w-7 h-7" {...config} />
                
            </Flex>
        </div>
    )
}

export default Navbar