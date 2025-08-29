import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Home, 
  FolderOpen, 
  Upload, 
  Settings, 
  Search, 
  Plus,
  MoreHorizontal,
  Play,
  Edit,
  Download
} from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";

const Dashboard = () => {
  const [selectedVariant, setSelectedVariant] = useState<number | null>(null);

  const projects = [
    { id: 1, name: "YouTube Series Thumbnails", count: 12, updated: "2 days ago" },
    { id: 2, name: "TikTok Campaign", count: 8, updated: "1 week ago" },
    { id: 3, name: "Instagram Reels", count: 15, updated: "3 days ago" },
  ];

  const variants = [
    { id: 1, title: "INSANE RESULTS", score: 94, platform: "YouTube" },
    { id: 2, title: "TOP SECRET", score: 89, platform: "YouTube" },
    { id: 3, title: "MIND BLOWN", score: 92, platform: "YouTube" },
    { id: 4, title: "GAME CHANGER", score: 87, platform: "YouTube" },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-muted/30 border-r border-border p-4 flex flex-col">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">TB</span>
          </div>
          <span className="text-xl font-bold text-foreground">ThumbBoost</span>
        </div>

        <nav className="space-y-2 flex-1">
          <a href="#" className="flex items-center space-x-3 bg-primary/10 text-primary px-3 py-2 rounded-lg">
            <Home className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 px-3 py-2 rounded-lg transition-colors">
            <FolderOpen className="w-5 h-5" />
            <span>Projects</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 px-3 py-2 rounded-lg transition-colors">
            <Upload className="w-5 h-5" />
            <span>Uploads</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 px-3 py-2 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-background border-b border-border px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search projects..." 
                  className="pl-10 w-64"
                />
              </div>
              <div className="w-8 h-8 bg-primary rounded-full"></div>
            </div>
          </div>
        </header>

        <div className="flex-1 flex">
          {/* Main Area */}
          <main className="flex-1 p-6 space-y-8">
            {/* Projects Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">Recent Projects</h2>
                <Button className="btn-primary">
                  <Plus className="w-4 h-4 mr-2" />
                  New Project
                </Button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) => (
                  <div key={project.id} className="bg-white rounded-xl border border-border p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-foreground">{project.name}</h3>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{project.count} thumbnails</p>
                    <p className="text-xs text-muted-foreground">Updated {project.updated}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Generated Variants */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">Latest Variants</h2>
                <Button variant="outline">View All</Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {variants.map((variant) => (
                  <div 
                    key={variant.id} 
                    className="group relative bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all cursor-pointer"
                    onClick={() => setSelectedVariant(variant.id)}
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                      <span className="text-2xl font-bold text-foreground text-center px-4 text-stroke-black">
                        {variant.title}
                      </span>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                        <Button size="sm" className="bg-white text-foreground hover:bg-white/90">
                          <Play className="w-4 h-4 mr-1" />
                          Use
                        </Button>
                        <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                          <Edit className="w-4 h-4 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </div>
                    
                    <div className="p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">Variant {variant.id}/4</span>
                        <span className="text-sm text-muted-foreground">{variant.platform}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-success h-2 rounded-full transition-all" 
                          style={{ width: `${variant.score}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-muted-foreground">Score: {variant.score}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* Quick Actions Sidebar */}
          <aside className="w-80 bg-muted/30 border-l border-border p-6">
            <h3 className="text-lg font-semibold text-foreground mb-6">Quick Actions</h3>
            
            <div className="space-y-4">
              <Button className="w-full btn-primary justify-start">
                <Plus className="w-4 h-4 mr-2" />
                New Thumbnail
              </Button>
              
              <Button variant="outline" className="w-full justify-start">
                <Upload className="w-4 h-4 mr-2" />
                Import Video
              </Button>

              <div className="border-t border-border pt-4 mt-6">
                <h4 className="font-medium text-foreground mb-3">Recent Activity</h4>
                <div className="space-y-3 text-sm">
                  <div className="text-muted-foreground">Generated 4 variants for "Tech Review"</div>
                  <div className="text-muted-foreground">Uploaded new project "Gaming Content"</div>
                  <div className="text-muted-foreground">Downloaded 3 thumbnails</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Modal for Variant Preview */}
      {selectedVariant && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Variant {selectedVariant}</h3>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setSelectedVariant(null)}
              >
                ×
              </Button>
            </div>
            
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-6">
              <span className="text-4xl font-bold text-foreground">
                {variants.find(v => v.id === selectedVariant)?.title}
              </span>
            </div>

            <div className="flex space-x-3">
              <Button className="btn-primary flex-1">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
              <Button variant="outline" className="flex-1">
                <Edit className="w-4 h-4 mr-2" />
                Refine
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;