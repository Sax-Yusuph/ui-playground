import NiceAvatar, { genConfig } from "react-nice-avatar";

const myConfig = genConfig({ "sex": "man",
"faceColor": "#AC6651",
"earSize": "small",
"eyeStyle": "smile",
"noseStyle": "short",
"mouthStyle": "smile",
"shirtStyle": "short",
"glassesStyle": "none",
"hairColor": "#D2EFF3",
"hairStyle": "thick",
"hatStyle": "none",
"hatColor": "#FC909F",
"eyeBrowStyle": "up",
"shirtColor": "#000",
"bgColor": "#fff" })


const RecentSales = () => {
  return (
    <div>
      <h1 className="text-xl mb-1 text-white">Recent Sales</h1>
      <p className="text-sm mb-8">You made 265 sales this month.</p>
      <div className="space-y-8">
        <div className="flex items-center">
          <div className="h-9 w-9">
          <NiceAvatar style={{ width: '2rem', height: '2rem' }} {...myConfig} />
          </div>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Olivia Martin</p>
            <p className="text-sm text-muted-foreground">
              alabere.coder@email.com
            </p>
          </div>
          <div className="ml-auto font-medium">+$1,999.00</div>
        </div>
        <div className="flex items-center">
          <div className="flex h-9 w-9 items-center justify-center space-y-0">
          <NiceAvatar style={{ width: '2rem', height: '2rem' }} {...myConfig} />
          </div>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Olivia Martin</p>
            <p className="text-sm text-muted-foreground">alabere.coder@email.com</p>
          </div>
          <div className="ml-auto font-medium">+$39.00</div>
        </div>
        <div className="flex items-center">
          <div className="h-9 w-9">
          <NiceAvatar style={{ width: '2rem', height: '2rem' }} {...myConfig} />
          </div>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Olivia Martin</p>
            <p className="text-sm text-muted-foreground">
              alabere.coder@email.com
            </p>
          </div>
          <div className="ml-auto font-medium">+$299.00</div>
        </div>
        <div className="flex items-center">
          <div className="h-9 w-9">
          <NiceAvatar style={{ width: '2rem', height: '2rem' }} {...myConfig} />
          </div>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Olivia Martin</p>
            <p className="text-sm text-muted-foreground">alabere.coder@email.com</p>
          </div>
          <div className="ml-auto font-medium">+$99.00</div>
        </div>
        <div className="flex items-center">
          <div className="h-9 w-9">
          <NiceAvatar style={{ width: '2rem', height: '2rem' }} {...myConfig} />
          </div>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Olivia Martin</p>
            <p className="text-sm text-muted-foreground">alabere.coder@email.com</p>
          </div>
          <div className="ml-auto font-medium">+$39.00</div>
        </div>
      </div>
    </div>
    

    // <div>
    //   <h1 className="text-white">Recent Sales</h1>
    //   <p>You made 265 sales this month.</p>
      
    //   <Space direction="vertical" >
    //     <div className="mt-5 flex space-x-6">
    //       <NiceAvatar style={{ width: '2rem', height: '2rem' }} {...myConfig} />
    //       <div className="text-sm">
    //         <h3 className="text-white">Olivia Martin</h3>
    //         <p className="text-sm/[14px]">olivia.martin@email.com</p>
    //       </div>
    //       <p className="ml-auto font-medium">+1,999.00</p>
    //     </div>
    //     <div className="mt-4 flex space-x-6">
    //       <NiceAvatar style={{ width: '2rem', height: '2rem' }} {...myConfig} />
    //       <div>
    //         <h3 className="text-white">Olivia Martin</h3>
    //         <p className="text-sm/[14px]">olivia.martin@email.com</p>
    //       </div>
    //       <p className="pt-3 pl-64">+1,999.00</p>
    //     </div>
    //     <div className="mt-4 flex space-x-6">
    //       <NiceAvatar style={{ width: '2rem', height: '2rem' }} {...myConfig} />
    //       <div>
    //         <h3 className="text-white">Olivia Martin</h3>
    //         <p className="text-sm/[14px]">olivia.martin@email.com</p>
    //       </div>
    //       <p className="pt-3 pl-64">+1,999.00</p>
    //     </div>
    //     <div className="mt-4 flex space-x-6">
    //       <NiceAvatar style={{ width: '2rem', height: '2rem' }} {...myConfig} />
    //       <div>
    //         <h3 className="text-white">Olivia Martin</h3>
    //         <p className="text-sm/[14px]">olivia.martin@email.com</p>
    //       </div>
    //       <p className="pt-3 pl-64">+1,999.00</p>
    //     </div>
    //     <div className="mt-4 flex space-x-6">
    //       <NiceAvatar style={{ width: '2rem', height: '2rem' }} {...myConfig} />
    //       <div>
    //         <h3 className="text-white">Olivia Martin</h3>
    //         <p className="text-sm/[14px]">olivia.martin@email.com</p>
    //       </div>
    //       <p className="pt-3 pl-64">+1,999.00</p>
    //     </div>
    //   </Space>
    // </div>
  )
}

export default RecentSales
