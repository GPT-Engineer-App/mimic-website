import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-3/4 h-3/4 bg-gray-800 rounded-lg shadow-lg p-4">
        <ScrollArea className="h-full">
          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>initial-todo-app-agent</span>
                <Badge variant="outline">31.52s</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span>3,034</span>
              </div>
            </CardContent>
          </Card>
          <Card className="mb-4 ml-4">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>ChatOpenAI</span>
                <Badge variant="outline">27.44s</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span>3,034</span>
              </div>
            </CardContent>
          </Card>
          <Card className="mb-4 ml-8">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>implement</span>
                <Badge variant="outline">119.85s</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span>edit-file</span>
              </div>
            </CardContent>
          </Card>
          <Card className="mb-4 ml-12">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Build Project</span>
                <Badge variant="outline">31.96s</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span>Lint Project</span>
                <Badge variant="outline">1.26s</Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="mb-4 ml-16">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>push</span>
                <Badge variant="outline">77.06s</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span>Build Project</span>
                <Badge variant="outline">7.07s</Badge>
              </div>
            </CardContent>
          </Card>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Index;