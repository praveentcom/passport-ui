"use client";

import { useState } from "react";
import { Metadata } from "next";
import { CalendarIcon, CheckIcon, ChevronDownIcon, HomeIcon, InfoIcon, Loader2Icon, MailIcon, PlusIcon, SearchIcon, SettingsIcon, UserIcon } from "lucide-react";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../../src/components/accordion";
import { Alert } from "../../../src/components/alert";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogTrigger } from "../../../src/components/alert-dialog";
import { AspectRatio } from "../../../src/components/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "../../../src/components/avatar";
import { Badge } from "../../../src/components/badge";
import { Blockquote } from "../../../src/components/blockquote";
import { Breadcrumb } from "../../../src/components/breadcrumb";
import { BulletList } from "../../../src/components/bullet-list";
import { Button } from "../../../src/components/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../src/components/card";
import { Checkbox } from "../../../src/components/checkbox";
import { CodeBlock } from "../../../src/components/code-block";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../../../src/components/collapsible";
import { Combobox } from "../../../src/components/combobox";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "../../../src/components/context-menu";
import { DatePicker } from "../../../src/components/date-picker";
import { Dialog, DialogContent, DialogTrigger } from "../../../src/components/dialog";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "../../../src/components/drawer";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../../../src/components/dropdown-menu";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../../../src/components/hover-card";
import { Input } from "../../../src/components/input";
import { Label } from "../../../src/components/label";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../../../src/components/pagination";
import { Popover, PopoverContent, PopoverTrigger } from "../../../src/components/popover";
import { Progress } from "../../../src/components/progress";
import { RadioGroup, RadioGroupItem } from "../../../src/components/radio-group";
import { ScrollArea } from "../../../src/components/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../src/components/select";
import { Separator } from "../../../src/components/separator";
import { Skeleton } from "../../../src/components/skeleton";
import { Slider } from "../../../src/components/slider";
import { Switch } from "../../../src/components/switch";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../../../src/components/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../src/components/tabs";
import { Textarea } from "../../../src/components/textarea";
import { Toggle } from "../../../src/components/toggle";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../../src/components/tooltip";
import { ContentContainer } from "../../../src/layouts/content-container";

export default function PlaygroundPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [sliderValue, setSliderValue] = useState([50]);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const comboboxItems = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
  ];

  return (
    <ContentContainer variant="broad">
      <div className="section-container">
        <div className="meta-container">
          <h1>Component Playground</h1>
          <p className="text-muted-foreground">
            All Passport UI components in one place for easy review and testing
          </p>
        </div>
      </div>

      <Separator />

      {/* Main Grid Layout */}
      <div className="grid grid-cols-12 gap-6 py-6">

        {/* Accordion */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Accordion</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other components.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Alert */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Alert</h2>
          <div className="space-y-4">
            <Alert
              icon={<InfoIcon />}
              title="Heads up!"
              description="You can add components to your app using the cli."
            />
            <Alert
              variant="destructive"
              icon={<InfoIcon />}
              title="Error"
              description="Your session has expired. Please log in again."
            />
          </div>
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Alert Dialog */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Alert Dialog</h2>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button>Show Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Are you absolutely sure?</h3>
                  <p className="text-sm text-muted-foreground">
                    This action cannot be undone. This will permanently delete your
                    account and remove your data from our servers.
                  </p>
                </div>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </div>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Avatar */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Avatar</h2>
          <div className="flex gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Badge */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Badge</h2>
          <div className="flex gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Blockquote */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Blockquote</h2>
          <Blockquote>
            "After all," he said, "everyone enjoys a good joke, so it's only
            fair that they should pay for the privilege."
          </Blockquote>
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Breadcrumb */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Breadcrumb</h2>
          <Breadcrumb
            path={[
              { label: "Home", href: "/" },
              { label: "Components", href: "/components" },
              { label: "Breadcrumb", href: "/components/breadcrumb" }
            ]}
          />
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Button */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Button</h2>
          <div className="flex gap-2 flex-wrap">
            <Button>Default</Button>
            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
            <Button>
              <MailIcon className="mr-2 size-4" /> With Icon
            </Button>
          </div>
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Bullet List */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Bullet List</h2>
          <BulletList
            items={[
              "First item in the list",
              "Second item in the list",
              "Third item in the list"
            ]}
          />
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Card */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Card</h2>
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card content goes here. This is where the main information is displayed.</p>
            </CardContent>
            <CardFooter>
              <Button>Action</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Checkbox */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Checkbox</h2>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" checked={checkboxChecked} onCheckedChange={(checked) => setCheckboxChecked(checked === true)} />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Code Block */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Code Block</h2>
          <CodeBlock language="typescript" code={`const greeting = "Hello, World!";\nconsole.log(greeting);`} />
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Collapsible */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Collapsible</h2>
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button>Toggle Content</Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2">
              <p>This content can be collapsed and expanded.</p>
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Combobox */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Combobox</h2>
          <Combobox
            options={comboboxItems}
            placeholder="Select fruit..."
            emptyText="No fruit found."
          />
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Context Menu */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Context Menu</h2>
          <ContextMenu>
            <ContextMenuTrigger className="flex h-32 w-full items-center justify-center rounded-md border border-dashed text-sm">
              Right click here
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>Profile</ContextMenuItem>
              <ContextMenuItem>Settings</ContextMenuItem>
              <ContextMenuItem>Logout</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Date Picker */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Date Picker</h2>
          <DatePicker date={date} onSelect={setDate} />
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Dialog */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Dialog</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Edit Profile</h3>
                  <p className="text-sm text-muted-foreground">
                    Make changes to your profile here. Click save when you're done.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button>Save changes</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Drawer */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Drawer</h2>
          <Drawer>
            <DrawerTrigger asChild>
              <Button>Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="p-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Drawer Title</h3>
                  <p className="text-sm text-muted-foreground">Drawer description goes here.</p>
                </div>
                <p>Drawer content</p>
              </div>
              <div className="mt-auto flex flex-row gap-2 p-4">
                <Button>Submit</Button>
                <DrawerClose asChild>
                  <Button>Cancel</Button>
                </DrawerClose>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Dropdown Menu */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Dropdown Menu</h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Hover Card */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Hover Card</h2>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button>Hover over me</Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <p>This is a hover card with additional information.</p>
            </HoverCardContent>
          </HoverCard>
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Input */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Input</h2>
          <div className="grid gap-4 max-w-md">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Email" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="disabled">Disabled</Label>
              <Input id="disabled" placeholder="Disabled input" disabled />
            </div>
          </div>
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Pagination */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Pagination</h2>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#">Previous</PaginationPrevious>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#">Next</PaginationNext>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Popover */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Popover</h2>
          <Popover>
            <PopoverTrigger asChild>
              <Button>Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <p className="text-sm">This is a popover with some content.</p>
            </PopoverContent>
          </Popover>
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Progress */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Progress</h2>
          <div className="space-y-4">
            <Progress value={33} />
            <Progress value={66} />
            <Progress value={100} />
          </div>
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Radio Group */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Radio Group</h2>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Option Two</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Scroll Area */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Scroll Area</h2>
          <ScrollArea className="h-48 w-full rounded-md border p-4">
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} className="py-1">
                Scroll item {i + 1}
              </div>
            ))}
          </ScrollArea>
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Select */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Select</h2>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="cherry">Cherry</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Skeleton */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Skeleton</h2>
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Slider */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Slider</h2>
          <div className="space-y-2">
            <Slider
              value={sliderValue}
              onValueChange={setSliderValue}
              max={100}
              step={1}
              className="w-full max-w-md"
            />
            <p className="text-sm text-muted-foreground">Value: {sliderValue[0]}</p>
          </div>
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Switch */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Switch</h2>
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" checked={switchChecked} onCheckedChange={setSwitchChecked} />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Table */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Table</h2>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV002</TableCell>
                <TableCell>Pending</TableCell>
                <TableCell>PayPal</TableCell>
                <TableCell className="text-right">$150.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Tabs */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Tabs</h2>
          <Tabs defaultValue="account" className="w-full max-w-md">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <p>Make changes to your account here.</p>
            </TabsContent>
            <TabsContent value="password">
              <p>Change your password here.</p>
            </TabsContent>
          </Tabs>
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Textarea */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Textarea</h2>
          <div className="grid gap-2 max-w-md">
            <Label htmlFor="message">Your message</Label>
            <Textarea id="message" placeholder="Type your message here." />
          </div>
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Toggle */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Toggle</h2>
          <div className="flex gap-2">
            <Toggle aria-label="Toggle italic">
              <InfoIcon className="size-4" />
            </Toggle>
            <Toggle aria-label="Toggle bold" disabled>
              <InfoIcon className="size-4" />
            </Toggle>
          </div>
        </div>

        <div className="col-span-12"><Separator /></div>

        {/* Tooltip */}
        <div className="col-span-12">
          <h2 className="text-xl font-semibold mb-4">Tooltip</h2>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This is a tooltip</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

      </div>
    </ContentContainer>
  );
}
