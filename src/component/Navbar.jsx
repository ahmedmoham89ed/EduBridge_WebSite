import * as React from "react";
import { Link } from "react-router-dom"; 
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const components= [
  {
    title: "Alert Dialog",
    href: "/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu className="flex items-center md:space-x-0 sm:space-x-0 sm:gap-0 justify-center gap-32 lg:gap-10 md:gap-0 lg:py-5 md:py-2 sm:py-2 bg-[#252b42] max-w-[100%]">
        <NavigationMenuList>
            {/* tilte of navbar */}
            <NavigationMenuItem>
                <Link to="/" legacyBehavior passHref>
                    <NavigationMenuLink className="NavigationMenuLink lg:text-3xl md:text-2xl sm:text-lg" >
                    EduBridge
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>

        </NavigationMenuList>
        <NavigationMenuList className="flex gap-4 lg:gap-1 md:gap-0 md:space-x-0 sm:space-x-0 sm:gap-0" >
        
            {/* home */}
            <NavigationMenuItem >
            <NavigationMenuTrigger className="text-base md:text-sm sm:text-sm text-white sm:space-x-0 bg-[#252b42] hover:bg-[#252b42] hover:text-white focus:bg-[#252b42]">Home</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[200px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                    <NavigationMenuLink asChild>
                    <Link
                        to="/"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    >
                        
                        <div className="mb-2 mt-4 text-lg font-medium">
                        shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                        </p>
                    </Link>
                    </NavigationMenuLink>
                </li>
                <ListItem to="/" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem to="/" title="Installation">
                    How to install dependencies and structure your app.
                </ListItem>
                <ListItem to="/" title="Typography">
                    Styles for headings, paragraphs, lists...etc
                </ListItem>
                </ul>
            </NavigationMenuContent>
            </NavigationMenuItem>

            {/* about  */}
            <NavigationMenuItem>
            <NavigationMenuTrigger className="text-base md:text-sm sm:text-sm sm:space-x-0 text-white bg-[#252b42] hover:bg-[#252b42] hover:text-white focus:bg-[#252b42]">About</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[200px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                    <NavigationMenuLink asChild>
                    <Link
                        to="/About"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    >
                        
                        <div className="mb-2 mt-4 text-lg font-medium">
                        shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                        </p>
                    </Link>
                    </NavigationMenuLink>
                </li>
                <ListItem to="/About" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem to="/About" title="Installation">
                    How to install dependencies and structure your app.
                </ListItem>
                <ListItem to="/About" title="Typography">
                    Styles for headings, paragraphs, lists...etc
                </ListItem>
                </ul>
            </NavigationMenuContent>
            </NavigationMenuItem>
            
            {/* product */}
            <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base md:text-sm sm:text-sm sm:space-x-0 text-white bg-[#252b42] hover:bg-[#252b42] hover:text-white focus:bg-[#252b42]">Product</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {components.map((component) => (
                        <ListItem
                        key={component.title}
                        title={component.title}
                        to={"/Product"}
                        >
                        {component.description}
                        </ListItem>
                    ))}
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
            
            {/* pricing */}
            <NavigationMenuItem>
            <Link to="/Pricing" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} lg:inline-block md:inline-block xl:inline-block 2xl:inline-block sm:hidden text-base md:text-sm bg-[#252b42] text-white `}>
                   Pricing
                </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>
            
            {/*contact  */}
            <NavigationMenuItem>
            <Link to="/Contact" legacyBehavior passHref>
                <NavigationMenuLink className={` ${navigationMenuTriggerStyle()} text-base  md:text-sm bg-[#252b42] text-white lg:inline-block md:inline-block xl:inline-block 2xl:inline-block sm:hidden`}>
                  Contact
                </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>

        </NavigationMenuList>
        <NavigationMenuList className="flex gap-10 lg:gap-4 md-gap-1">
            <Link to={"/"} className="text-base md:text-sm text-white font-light font-[rlight] hover:scale-110 duration-500 " >Login</Link>
            <Link to={"/"} className="bg-sky-500 px-3 flex items-center justify-center gap-2 md:gap-0 md:text-sm py-1 text-lg text-white rounded-lg font-[rCondensed] md:font-[rlight] hover:scale-110 duration-300 transition-all ease-in-out ">Join Us <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg></Link>
        </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem =(({ className, title, children, to, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          to={to}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";