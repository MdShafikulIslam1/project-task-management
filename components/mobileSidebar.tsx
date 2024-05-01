"use client";
import { CloseOutlined } from "@ant-design/icons";
// import { Menu } from "lucide-react";
// import { useEffect, useState } from "react";
// import Sidebar from "./sidebar";
// import { Button } from "./ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

// interface MobileSidebarProps {
//   apiLimitCount: number;
// }

// const MobileSidebar = ({ apiLimitCount }: MobileSidebarProps) => {
//   const [isMounted, setIsMounted] = useState(false);
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted) return null;
//   return (
//     <Sheet>
//       <SheetTrigger>
//         <Button variant={"ghost"} size={"icon"} className="md:hidden">
//           <Menu />
//         </Button>
//       </SheetTrigger>
//       <SheetContent side="left" className="p-0">
//         <Sidebar />
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default MobileSidebar;

import { Button, Drawer, Space } from "antd";
import { Menu } from "lucide-react";
import { useState } from "react";
import Sidebar from "./sidebar";

const MobileSidebar = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Space>
        <Button className="md:hidden" type="primary" onClick={showDrawer}>
          <Menu />
        </Button>
      </Space>
      <Drawer
        style={{ backgroundColor: "black" }}
        className="bg-black/10"
        closeIcon={<CloseOutlined />}
        title="Basic Drawer"
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        key={"left"}
      >
        <Sidebar />
      </Drawer>
    </div>
  );
};

export default MobileSidebar;
