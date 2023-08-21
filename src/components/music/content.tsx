import { Tabs, Button, Card, Space, Typography, Divider } from "@arco-design/web-react";
import { IconPlusCircle, IconThumbUp } from '@arco-design/web-react/icon';
import { listenNowAlbums, madeForYouAlbums } from '../../data/album';
import { PodcastEmptyPlaceholder } from "./podcast";
const TabPane = Tabs.TabPane;


const ContentPage = () => {
    return (
        <div className="p-8 flex flex-col">
            <Space direction="vertical" size={40} className="container w-full flex flex-col gap-8 mt-2">
                <div className="flex">
                    <Tabs type={"rounded"}>
                        <TabPane key='1' title='Music'>
                            <Typography>
                                <div className="">
                                    <div className="space-y-1">
                                        <h2 className="text-2xl font-semibold ">
                                            Listen Now
                                        </h2>
                                        <p className="text-sm">
                                            Top picks for you. Updated daily.
                                        </p>
                                    </div>
                                </div>
                                <Divider />
                                <div className="w-full">
                                    <Card bordered className="w-[full]">
                                        <div className="flex gap-6 pb-2">
                                            {listenNowAlbums.map((album) => (
                                                <div>
                                                    <img src={album.cover} className="mb-4 h-60 w-full rounded-xl object-cover transition-all hover:scale-105" />
                                                    <div className="space-y-1 text-sm">
                                                        <h3 className="font-medium leading-none">{album.name}</h3>
                                                        <small>{album.artist}</small>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </Card>
                                    <div className="mt-6 space-y-1">
                                        <h2 className="text-2xl font-semibold tracking-tight">
                                            Made for You
                                        </h2>
                                        <p className="text-sm text-muted-foreground">
                                            Your personal playlists. Updated daily.
                                        </p>
                                    </div>
                                    <Divider />
                                    <Card bordered className="w-full">
                                        <div className="flex gap-4 pb-2">
                                            {madeForYouAlbums.map((album) => (
                                                <div>
                                                    <img src={album.cover} className="mb-4 h-40 w-full rounded-xl transition-all hover:scale-105" />
                                                    <div className="space-y-1 text-sm">
                                                        <h3 className="font-medium leading-none">{album.name}</h3>
                                                        <small>{album.artist}</small>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </Card>
                                </div>
                            </Typography>
                        </TabPane>
                        <TabPane key='2' title='PodCasts'>
                            <Typography>
                                <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <h2 className="text-2xl font-semibold tracking-tight">
                                            New Episodes
                                        </h2>
                                        <p className="text-sm text-muted-foreground">
                                            Your favorite podcasts. Updated daily.
                                        </p>
                                    </div>
                                </div>
                                <Divider className="my-4" />
                                <PodcastEmptyPlaceholder />
                            </Typography>
                        </TabPane>
                        <TabPane key='3' title='Live'>
                            <Typography className="flex items-center justify-center">
                                <div className="flex items-center gap-8">
                                    <p>Go live Now</p>
                                    <IconThumbUp className="text-6xl text-blue-600"/>
                                </div>
                            </Typography>
                        </TabPane>
                    </Tabs>
                    <div className="absolute left-[88%]">
                        <Button type='secondary' className="w-full rounded-md">
                            <IconPlusCircle fontSize={18} />
                            Add Music
                        </Button>
                    </div>
                </div>
            </Space>
        </div>
    )
}

export default ContentPage
