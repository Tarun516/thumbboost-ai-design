import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Upload, 
  Crop, 
  Type, 
  Square, 
  Save,
  User
} from "lucide-react";

const ComponentLibrary = () => {
  return (
    <section className="w-full py-20 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Component Library</h2>
          <p className="text-muted-foreground">Reusable UI components with consistent design tokens</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Buttons */}
            <div className="space-y-4">
              <Label className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Buttons
              </Label>
              <div className="space-y-3">
                <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                  Primary
                </Button>
                <Button variant="outline" className="w-full">
                  Secondary
                </Button>
                <Button variant="ghost" className="w-full">
                  Ghost
                </Button>
              </div>
            </div>

            {/* Form Elements */}
            <div className="space-y-4">
              <Label className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Form Elements
              </Label>
              <div className="space-y-3">
                <Input placeholder="Text input" />
                <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                  <Upload className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">File Upload</span>
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Interactive Elements */}
            <div className="space-y-4">
              <Label className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Interactive
              </Label>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="toggle" className="text-sm">Toggle</Label>
                  <Switch id="toggle" />
                </div>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-sm font-medium">Small Card</div>
                    <div className="text-xs text-muted-foreground">Card content</div>
                  </CardContent>
                </Card>
                <div className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm">Avatar</span>
                </div>
              </div>
            </div>

            {/* Icons */}
            <div className="space-y-4">
              <Label className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Icon Set
              </Label>
              <div className="grid grid-cols-3 gap-3">
                <div className="flex flex-col items-center space-y-1">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Crop className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">Crop</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Type className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">Text</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Square className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">Outline</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Save className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">Save</span>
                </div>
              </div>
            </div>
          </div>

          {/* Design Tokens */}
          <div className="border-t border-border mt-8 pt-8">
            <h3 className="text-lg font-semibold mb-4">Design Tokens</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-medium mb-2">Colors</div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-primary rounded"></div>
                    <span>Primary: #4F46E5</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-accent rounded"></div>
                    <span>Accent: #06B6D4</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-background border rounded"></div>
                    <span>Background: #F8FAFC</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="font-medium mb-2">Typography</div>
                <div className="space-y-1">
                  <div>Font: Inter</div>
                  <div>Headline: 700 weight</div>
                  <div>Body: 400 weight</div>
                </div>
              </div>
              <div>
                <div className="font-medium mb-2">Spacing</div>
                <div className="space-y-1">
                  <div>Radius: 10px</div>
                  <div>Base spacing: 24px</div>
                  <div>Shadow: 0 6px 18px rgba(15,23,42,0.06)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentLibrary;