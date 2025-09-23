import { LayoutList } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Tabs",
  icon: LayoutList,
  description:
    "A set of layered sections of content, known as tab panels, that display one panel of content at a time.",
  category: "components",
  storyId: "components-tabs--default",
  slug: "tabs",
  importCode: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "passport-ui";
import { Card, CardContent } from "passport-ui";
import { Home, BarChart3, Settings } from "lucide-react";`,
  usageCode: `<Tabs defaultValue="overview" className="w-md">
  <TabsList>
    <TabsTrigger value="overview" icon={Home}>
      Overview
    </TabsTrigger>
    <TabsTrigger value="analytics" icon={BarChart3}>
      Analytics
    </TabsTrigger>
    <TabsTrigger value="settings" icon={Settings}>
      Settings
    </TabsTrigger>
  </TabsList>

  <TabsContent value="overview">
    <Card>
      <CardContent>
        <h3 className="text-lg font-semibold">Project Overview</h3>
        <p className="text-sm text-muted-foreground mt-2">
          View your project's current status, recent activity, and
          key metrics all in one place.
        </p>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Active tasks:</span>
            <span className="font-medium">12</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Completed:</span>
            <span className="font-medium">8</span>
          </div>
        </div>
      </CardContent>
    </Card>
  </TabsContent>

  <TabsContent value="analytics">
    <Card>
      <CardContent>
        <h3 className="text-lg font-semibold">Analytics Dashboard</h3>
        <p className="text-sm text-muted-foreground mt-2">
          Track performance metrics and growth trends.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold">2.4k</div>
            <div className="text-xs text-muted-foreground">Users</div>
          </div>
          <div>
            <div className="text-2xl font-bold">18%</div>
            <div className="text-xs text-muted-foreground">Growth</div>
          </div>
        </div>
      </CardContent>
    </Card>
  </TabsContent>

  <TabsContent value="settings">
    <Card>
      <CardContent>
        <h3 className="text-lg font-semibold">Settings</h3>
        <p className="text-sm text-muted-foreground mt-2">
          Configure your preferences and application settings.
        </p>
      </CardContent>
    </Card>
  </TabsContent>
</Tabs>`,
};
