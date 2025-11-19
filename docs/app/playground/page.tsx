"use client";

import { useState } from "react";
import { Metadata } from "next";
import { CalendarIcon, CheckIcon, ChevronDownIcon, HomeIcon, InfoIcon, Loader2Icon, MailIcon, PlusIcon, SearchIcon, SettingsIcon, UserIcon } from "lucide-react";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../../src/components/accordion";
import { Alert } from "../../../src/components/alert";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogTrigger } from "../../../src/components/alert-dialog";
import { AspectRatio } from "../../../src/components/aspect-ratio";
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
      {/* Main Grid Layout */}
      <div className="grid grid-cols-12 gap-6 py-6">

        {/* Accordion */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Accordion</CardTitle>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
        </div>

        {/* Alert */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Alert</CardTitle>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
        </div>

        {/* Alert Dialog */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Alert Dialog</CardTitle>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
        </div>

        {/* Badge */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Badge</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Blockquote */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Blockquote</CardTitle>
            </CardHeader>
            <CardContent>
              <Blockquote>
                "After all," he said, "everyone enjoys a good joke, so it's only
                fair that they should pay for the privilege."
              </Blockquote>
            </CardContent>
          </Card>
        </div>

        {/* Breadcrumb */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Breadcrumb</CardTitle>
            </CardHeader>
            <CardContent>
              <Breadcrumb
                path={[
                  { label: "Home", href: "/" },
                  { label: "Components", href: "/components" },
                  { label: "Breadcrumb", href: "/components/breadcrumb" }
                ]}
              />
            </CardContent>
          </Card>
        </div>

        {/* Button */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Button</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 flex-wrap">
                <Button>Default</Button>
                <Button disabled>Disabled</Button>
                <Button loading>Loading</Button>
                <Button>
                  <MailIcon className="mr-2 size-4" /> With Icon
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bullet List */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Bullet List</CardTitle>
            </CardHeader>
            <CardContent>
              <BulletList
                items={[
                  "First item in the list",
                  "Second item in the list",
                  "Third item in the list"
                ]}
              />
            </CardContent>
          </Card>
        </div>

        {/* Card */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Card</CardTitle>
            </CardHeader>
            <CardContent>
              <Card className="w-full">
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
            </CardContent>
          </Card>
        </div>

        {/* Checkbox */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Checkbox</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" checked={checkboxChecked} onCheckedChange={(checked) => setCheckboxChecked(checked === true)} />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Code Block */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Code Block</CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock language="typescript" code={`const greeting = "Hello, World!";\nconsole.log(greeting);`} />
            </CardContent>
          </Card>
        </div>

        {/* Collapsible */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Collapsible</CardTitle>
            </CardHeader>
            <CardContent>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button>Toggle Content</Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2">
                  <p>This content can be collapsed and expanded.</p>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
        </div>

        {/* Combobox */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Combobox</CardTitle>
            </CardHeader>
            <CardContent>
              <Combobox
                options={comboboxItems}
                placeholder="Select fruit..."
                emptyText="No fruit found."
              />
            </CardContent>
          </Card>
        </div>

        {/* Context Menu */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Context Menu</CardTitle>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
        </div>

        {/* Date Picker */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Date Picker</CardTitle>
            </CardHeader>
            <CardContent>
              <DatePicker date={date} onSelect={setDate} />
            </CardContent>
          </Card>
        </div>

        {/* Dialog */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Dialog</CardTitle>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
        </div>

        {/* Drawer */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Drawer</CardTitle>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
        </div>

        {/* Dropdown Menu */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Dropdown Menu</CardTitle>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
        </div>

        {/* Hover Card */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Hover Card</CardTitle>
            </CardHeader>
            <CardContent>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button>Hover over me</Button>
                </HoverCardTrigger>
                <HoverCardContent>
                  <p>This is a hover card with additional information.</p>
                </HoverCardContent>
              </HoverCard>
            </CardContent>
          </Card>
        </div>

        {/* Input */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Input</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
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
            </CardContent>
          </Card>
        </div>

        {/* Pagination */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Pagination</CardTitle>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
        </div>

        {/* Popover */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Popover</CardTitle>
            </CardHeader>
            <CardContent>
              <Popover>
                <PopoverTrigger asChild>
                  <Button>Open Popover</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <p className="text-sm">This is a popover with some content.</p>
                </PopoverContent>
              </Popover>
            </CardContent>
          </Card>
        </div>

        {/* Progress */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Progress value={33} />
                <Progress value={66} />
                <Progress value={100} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Radio Group */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Radio Group</CardTitle>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
        </div>

        {/* Scroll Area */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Scroll Area</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-48 w-full rounded-md border p-4">
                {Array.from({ length: 50 }).map((_, i) => (
                  <div key={i} className="py-1">
                    Scroll item {i + 1}
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Select */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Select</CardTitle>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
        </div>

        {/* Skeleton */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Skeleton</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Slider */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Slider</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Slider
                  value={sliderValue}
                  onValueChange={setSliderValue}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <p className="text-sm text-muted-foreground">Value: {sliderValue[0]}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Switch */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Switch</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" checked={switchChecked} onCheckedChange={setSwitchChecked} />
                <Label htmlFor="airplane-mode">Airplane Mode</Label>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Table */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Table</CardTitle>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
        </div>

        {/* Textarea */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Textarea</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <Label htmlFor="message">Your message</Label>
                <Textarea id="message" placeholder="Type your message here." />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Toggle */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Toggle</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Toggle aria-label="Toggle italic">
                  <InfoIcon className="size-4" />
                </Toggle>
                <Toggle aria-label="Toggle bold" disabled>
                  <InfoIcon className="size-4" />
                </Toggle>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Tabs</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="account">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  <p className="text-sm text-muted-foreground">Make changes to your account here.</p>
                </TabsContent>
                <TabsContent value="password">
                  <p className="text-sm text-muted-foreground">Change your password here.</p>
                </TabsContent>
                <TabsContent value="settings">
                  <p className="text-sm text-muted-foreground">Update your settings here.</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Tooltip */}
        <div className="col-span-12 md:col-span-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Tooltip</CardTitle>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
        </div>

      </div>
    </ContentContainer>
  );
}
