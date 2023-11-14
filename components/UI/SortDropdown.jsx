import React from 'react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { ChevronDown } from 'lucide-react';

function SortDropdown() {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Newest"]));

    const selectedValue = React.useMemo(
      () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
      [selectedKeys]
    );
  
  return (
    <div>
            <Dropdown>
      <DropdownTrigger>
        <Button
          endContent={<ChevronDown size={18} color='#525252'/>}
          variant="light" 
          className="capitalize"
        >
          <span className="text-neutral-800 font-medium">Sort By <span className="font-semibold">{selectedValue}</span></span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <DropdownItem className='text-neutral-800' key="Newest">Newest</DropdownItem>
        <DropdownItem className='text-neutral-800' key="Highest Rated">Highest Rated</DropdownItem>
        <DropdownItem className='text-neutral-800' key="Price Low">Price Low</DropdownItem>
        <DropdownItem className='text-neutral-800' key="Price High">Price High</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </div>
  )
}

export default SortDropdown