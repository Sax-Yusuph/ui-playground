import * as Tabs from '@radix-ui/react-tabs';
import { Box, Heading, Card } from '@radix-ui/themes'
import { BsDatabase } from "react-icons/bs"
import { PiArrowSquareOutBold } from "react-icons/pi"
import { Button } from '../components/reactants';
import { Text } from '../components/reactants/text/text';
import { useState } from 'react';



const Dashboard = () => {

    const [ activeTab, setActiveTab] = useState('storage')

    return (
        <div>
            <Tabs.Root className="" defaultValue="storage" orientation="vertical">
                <Tabs.List className="shrink-0 flex gap-4 border-b mx-5">
                    <Tabs.Trigger className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')} value="overview">Overview</Tabs.Trigger>
                    <Tabs.Trigger className={activeTab === 'integrations' ? 'active' : ''} onClick={() => setActiveTab('integrations')} value="integrations">Integrations</Tabs.Trigger>
                    <Tabs.Trigger className={activeTab === 'activity' ? 'active' : ''} onClick={() => setActiveTab('activity')} value="activity">Activity</Tabs.Trigger>
                    <Tabs.Trigger className={activeTab === 'domains' ? 'active' : ''} onClick={() => setActiveTab('domains')} value="domains">Domains</Tabs.Trigger>
                    <Tabs.Trigger className={activeTab === 'storage' ? 'active' : ''} onClick={() => setActiveTab('storage')} value="storage">Storage</Tabs.Trigger>
                </Tabs.List>

                <Box pt="3" pb="2" className=''>
                    <Tabs.Content value="overview" className="grow p-5 bg-white rounded-b-md outline-none">
                        <div className='px-20 mx-[8%] mb-20'>
                            <Heading className='text-3xl font-bold'>Overview</Heading>
                            <Text className='text-lg'>Make changes to your account.</Text>
                        </div>
                        <hr />
                    </Tabs.Content>

                    <Tabs.Content value="integrations" className="grow p-5 bg-white rounded-b-md outline-none">
                        <div className='px-20 mx-[8%] mb-20'>
                            <Heading className='text-3xl font-bold'>Integration</Heading>
                            <Text className='text-lg'>Access and update your documents.</Text>
                        </div>
                        <hr />
                    </Tabs.Content>

                    <Tabs.Content value="activity" className="grow p-5 bg-white rounded-b-md outline-none">
                        <div className='px-20 mx-[8%] mb-20'>
                            <Heading className='text-3xl font-bold'>Activity</Heading>
                            <Text className='text-lg'>Edit your profile or update contact information.</Text>
                        </div>
                        <hr />
                    </Tabs.Content>

                    <Tabs.Content value="domains" className="grow p-5 bg-white rounded-b-md outline-none">
                        <div className='px-20 mx-[8%] mb-20'>
                          <Heading className='text-3xl font-bold'>Domain</Heading>
                          <Text className='text-lg'>Edit your profile or update contact information.</Text>
                        </div>
                        <hr />
                    </Tabs.Content>

                    <Tabs.Content value="storage" className="grow p-5 bg-white rounded-b-md outline-none">
                        <div className='flex items-center justify-between px-20 mx-[8%] mb-20'>
                            <div className=''>
                                <Heading className='text-3xl font-bold'>Storage</Heading>
                                <Text className='text-lg'>Read and write directly to databases and from your projects.</Text>
                            </div>
                            <Button className='bg-black text-white hover:text-gray-600' size="medium" color="gray" variant="ghost">Create Database</Button>
                        </div>
                        <hr />
                        <div className='flex justify-center'>
                            <Card className=' border-2 w-[80%] mt-24 rounded-xl'>
                                <div className='flex flex-col items-center justify-center mt-20'>
                                    <div className='m-8 flex flex-col items-center gap-2 w-'>
                                        <div className='h-16 w-16 border-2 flex items-center justify-center rounded-2xl'>
                                            <BsDatabase className='h-10 w-10 ' />
                                        </div>
                                        <Text size="16" weight="700">Create a database</Text>
                                        <Text className='text-center text-base mb-12'>Craete a database and stores that  you can connect to your team's project</Text>
                                    </div>
                                    
                                    <Card className='border-2 rounded-xl w-[33rem] p-8'>
                                        <div className='flex flex-row items-center justify-between my-8'>
                                            <div className='flex items-center gap-4'>
                                                <div className='h-12 w-12 border-2 flex items-center justify-center rounded-2xl'>
                                                    <BsDatabase className='h-8 w-8 ' />
                                                </div>
                                                <Box className='flex flex-col'>
                                                    <Text size="14" weight="700">
                                                        Edge Config
                                                    </Text>
                                                    <Text>
                                                        Ultra-low latency reads
                                                    </Text>
                                                </Box>
                                            </div>
                                            <Button className='bg-gray-200' size="medium" color="gray" variant="ghost">Create</Button>
                                        </div>
                                        <hr className='w-full my-4 leading-8' />
                                        
                                        <div className='flex flex-row items-center justify-between my-8'>
                                            <div className='flex items-center gap-4'>
                                                <div className='h-12 w-12 border-2 flex items-center justify-center rounded-2xl'>
                                                    <BsDatabase className='h-8 w-8 ' />
                                                </div>
                                                <Box className='flex flex-col'>
                                                    <Text size="14" weight="700">
                                                        Postgres <Button className='border rounded-full border-solid border-blue-600' size="small" color="gray" variant="ghost">Beta</Button>
                                                    </Text>
                                                    <Text>
                                                        Serverless SQL
                                                    </Text>
                                                </Box>
                                            </div>
                                            <Button className='bg-gray-200' size="medium" color="gray" variant="ghost">Create</Button>
                                        </div>
                                        <hr className='my-4'/>
                                        <div className='flex flex-row items-center justify-between my-8'>
                                            <div className='flex items-center gap-4'>
                                                <div className='h-12 w-12 border-2 flex items-center justify-center rounded-2xl'>
                                                    <BsDatabase className='h-8 w-8 ' />
                                                </div>
                                                <Box className='flex flex-col'>
                                                    <Text size="14" weight="700">
                                                        Blob <Button className='border rounded-full border-solid border-blue-600' size="small" color="gray" variant="ghost">Invite</Button>
                                                    </Text>
                                                    <Text>
                                                        Fast object storage
                                                    </Text>
                                                </Box>
                                            </div>
                                            <Button className=' bg-gray-200' size="medium" variant="solid" color='gray' > Join Waitlist</Button>
                                        </div>
                                    </Card>
                                    <Card className='border-2 rounded-xl w-[33rem] p-8 mt-12 mb-32'>
                                        <div className='flex justify-between items-center my-8'>
                                            <div className='flex flex-col'>
                                                <Text size="16" weight="800">
                                                Browse Database Integrations
                                                </Text>
                                                <Text>
                                                Extend your database options even further.
                                                </Text>
                                            </div>
                                            <Button className='bg-gray-200 h-10 w-10 rounded-lg'><PiArrowSquareOutBold className='text-xl' /></Button>
                                        </div>
                                    </Card>
                                </div>
                            </Card>
                        </div>
                    </Tabs.Content>
                </Box>
            </Tabs.Root>
        </div>
    )
}

export default Dashboard
