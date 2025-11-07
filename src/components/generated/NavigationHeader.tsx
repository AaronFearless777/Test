import React, { useState } from 'react';
import { ChevronDown, Menu } from 'lucide-react';
type NavigationHeaderProps = {
  className?: string;
};
type DropdownItem = {
  label: string;
  items?: string[];
};
const navigationItems: DropdownItem[] = [{
  label: 'Products'
}, {
  label: 'Solutions'
}, {
  label: 'Resources'
}, {
  label: 'Partners'
}];

// @component: NavigationHeader
export const NavigationHeader = (props: NavigationHeaderProps) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // @return
  return <header data-testid="availability-test" className="sticky top-0 left-0 z-[3] flex w-full bg-white items-center h-[83px] px-10 py-4" style={{
    boxSizing: 'border-box'
  }}>
      <div className="max-w-[1440px] grid w-[1440px] pr-0 pl-0 justify-between items-center mx-auto" style={{
      gridAutoFlow: 'column',
      gridTemplateColumns: '54px 1fr'
    }}>
        <div className="z-[4] w-[54px]">
          <a aria-current="page" href="#" onClick={e => e.preventDefault()} className="block h-[51.6px]">
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjkiIGhlaWdodD0iNjYiIHZpZXdCb3g9IjAgMCA2OSA2NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTMuMiA3LjhjMCAxLjgtMS41IDMuMy0zLjMgMy4zSDQuNVY0LjVIMTBhMy4zIDMuMyAwIDAgMSAzLjMgMy4zem00LjcgMEE3LjcgNy43IDAgMCAwIDEwLjEgMEgwdjIyLjJoNC41di02LjZoNS42YzQuMyAwIDcuOC0zLjUgNy44LTcuOG0xMiA0MWgxNi4zdi00LjRIMzQuM3YtMy43YTI4IDI4IDAgMCAwIDUuMy0xLjNsMi4yLS44LTEuNi00LjQtMi4yLjgtMy43IDF2LTQuOGgxMS45di00LjVIMjkuOHY5LjZjLTIuNy0uMy00LjctMS40LTYtMi41LTIuMy0yLTQuNy02LTMtMTMuOWwuNS0yLjMtNC42LTEtLjUgMi4zUTEzLjcgMzEgMjAuNyAzNy4zYTE1IDE1IDAgMCAwIDkuMSAzLjZ2OHptMzQuNiA1LjdhOSA5IDAgMCAxLS40IDIuOHEtLjQgMS4zLTEuMyAyLjJhNiA2IDAgMCAxLTIgMS41IDcgNyAwIDAgMS01LjEgMCA2IDYgMCAwIDEtMi0xLjVxLS44LTEtMS4yLTIuMmE5IDkgMCAwIDEtLjUtMi44cTAtMS41LjUtMi44dDEuMi0yLjNhNiA2IDAgMCAxIDItMS41IDcgNyAwIDAgMSA1LjIgMCA2IDYgMCAwIDEgMiAxLjUgOSA5IDAgMCAxIDEuNyA1em00LjUgMGExMSAxMSAwIDAgMC0yLjktOC4zIDEwIDEwIDAgMCAwLTMuNC0yLjQgMTEgMTEgMCAwIDAtNC40LS45IDExIDExIDAgMCAwLTQuNS45IDEwIDEwIDAgMCAwLTMuNCAyLjRxLTEuNCAxLjUtMi4xIDMuNy0uNyAyLjEtLjcgNC42dC43IDQuNiAyLjEgMy42YTEwIDEwIDAgMCAwIDMuNCAyLjRxMi4xLjkgNC41LjlhMTEgMTEgMCAwIDAgNC40LS45IDEwIDEwIDAgMCAwIDMuNC0yLjRxMS41LTEuNSAyLjItMy42LjctMi4yLjctNC42IiBmaWxsPSIjMDAwIi8+PC9zdmc+" alt="Home" className="block max-w-full h-[51.6px] object-contain" />
          </a>
        </div>

        <nav className="flex justify-between pr-0 items-center w-full h-[51.6px]">
          <div className="grid items-center text-black font-['Neue_Haas_Grotesk_Display',system-ui,'Helvetica_Neue',Arial,sans-serif] font-normal leading-[36.8px] text-[23px] pl-6 m-0" style={{
          gridTemplateColumns: 'auto auto auto auto auto'
        }}>
            {navigationItems.map((item, index) => <div key={index} className="grid">
                <button aria-expanded={openDropdown === index} aria-controls={`header-dropdown-${index}`} className="font-['Neue_Haas_Grotesk_Text',system-ui,'Helvetica_Neue',Arial,sans-serif] text-base leading-6 font-normal text-black w-auto cursor-pointer transition-colors ease-in-out px-4 py-0 m-0 bg-transparent border-0 hover:text-gray-600" onClick={() => toggleDropdown(index)}>
                  <span className="grid items-center gap-2 text-black font-['Neue_Haas_Grotesk_Text',system-ui,'Helvetica_Neue',Arial,sans-serif] font-normal leading-6 text-base p-0 m-0" style={{
                gridTemplateColumns: 'auto 12px'
              }}>
                    {item.label}
                    <ChevronDown className="w-3 h-3 transition-transform ease-in-out" style={{
                  transform: openDropdown === index ? 'rotate(180deg)' : 'rotate(0deg)'
                }} />
                  </span>
                </button>
                <div id={`header-dropdown-${index}`} tabIndex={-1}></div>
              </div>)}

            <a className="text-black text-center grid items-center gap-2 font-['Neue_Haas_Grotesk_Text',system-ui,'Helvetica_Neue',Arial,sans-serif] font-normal leading-6 text-base px-4 py-0 m-0 hover:text-gray-600 transition-colors" href="#" onClick={e => e.preventDefault()}>
              Pricing
            </a>
          </div>

          <div className="flex items-center text-black font-['Neue_Haas_Grotesk_Display',system-ui,'Helvetica_Neue',Arial,sans-serif] font-normal leading-[36.8px] text-[23px] m-0">
            <a className="text-black text-center grid items-center gap-2 font-['Neue_Haas_Grotesk_Text',system-ui,'Helvetica_Neue',Arial,sans-serif] font-normal leading-6 text-base h-6 px-4 py-0 m-0 hover:text-gray-600 transition-colors" href="#" onClick={e => e.preventDefault()} target="_blank" rel="noopener noreferrer">
              Log in
            </a>
            <a className="text-black text-center grid items-center gap-2 font-['Neue_Haas_Grotesk_Text',system-ui,'Helvetica_Neue',Arial,sans-serif] font-normal leading-6 text-base h-6 px-4 py-0 m-0 hover:text-gray-600 transition-colors" href="#" onClick={e => e.preventDefault()}>
              Contact sales
            </a>
            <div className="pl-4">
              <button className="relative inline-flex text-white cursor-pointer bg-[rgb(34,34,34)] justify-center items-center transition-all ease-in hover:bg-[rgb(50,50,50)] border border-[rgb(34,34,34)] rounded-full px-7 py-[14px] font-['Spezia_Monospace_SemiMono',monospace,'Helvetica_Neue',Arial,sans-serif] text-base leading-4 font-normal">
                <span>Get started</span>
              </button>
            </div>
          </div>
        </nav>

        <button className="hidden cursor-pointer bg-transparent p-0 border-0">
          <Menu className="h-7 text-black" />
        </button>
      </div>
    </header>;
};