import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MembersList } from "@/components/members-list";
import { Plus } from "lucide-react";

export default function MembersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Members</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Member
          </Button>
        </div>
        
        <div className="flex items-center mb-6">
          <div className="flex-1 max-w-sm">
            <Input placeholder="Search members..." />
          </div>
        </div>
        
        <MembersList />
      </main>
    </div>
  );
}