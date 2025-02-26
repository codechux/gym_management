"use client";

import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Mail } from "lucide-react";

const members = [
  {
    id: "M001",
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    status: "Active",
    membershipType: "Premium",
    joinDate: "Jan 15, 2023",
    avatar: "JS",
    avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop&auto=format",
  },
  {
    id: "M002",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "+1 (555) 234-5678",
    status: "Active",
    membershipType: "Standard",
    joinDate: "Feb 20, 2023",
    avatar: "SJ",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&auto=format",
  },
  {
    id: "M003",
    name: "Michael Chen",
    email: "m.chen@example.com",
    phone: "+1 (555) 345-6789",
    status: "Inactive",
    membershipType: "Premium",
    joinDate: "Mar 10, 2023",
    avatar: "MC",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&auto=format",
  },
  {
    id: "M004",
    name: "Emily Rodriguez",
    email: "emily.r@example.com",
    phone: "+1 (555) 456-7890",
    status: "Active",
    membershipType: "Standard",
    joinDate: "Apr 5, 2023",
    avatar: "ER",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&auto=format",
  },
  {
    id: "M005",
    name: "David Kim",
    email: "david.k@example.com",
    phone: "+1 (555) 567-8901",
    status: "Active",
    membershipType: "Premium",
    joinDate: "May 12, 2023",
    avatar: "DK",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&auto=format",
  },
  {
    id: "M006",
    name: "Jessica Lee",
    email: "jessica.l@example.com",
    phone: "+1 (555) 678-9012",
    status: "Expired",
    membershipType: "Standard",
    joinDate: "Jun 8, 2023",
    avatar: "JL",
    avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&auto=format",
  },
  {
    id: "M007",
    name: "Robert Taylor",
    email: "robert.t@example.com",
    phone: "+1 (555) 789-0123",
    status: "Active",
    membershipType: "Premium",
    joinDate: "Jul 22, 2023",
    avatar: "RT",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&auto=format",
  },
  {
    id: "M008",
    name: "Amanda Wilson",
    email: "amanda.w@example.com",
    phone: "+1 (555) 890-1234",
    status: "Active",
    membershipType: "Standard",
    joinDate: "Aug 14, 2023",
    avatar: "AW",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&auto=format",
  },
];

export function MembersList() {
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);

  const toggleSelectAll = () => {
    if (selectedMembers.length === members.length) {
      setSelectedMembers([]);
    } else {
      setSelectedMembers(members.map(member => member.id));
    }
  };

  const toggleSelectMember = (id: string) => {
    if (selectedMembers.includes(id)) {
      setSelectedMembers(selectedMembers.filter(memberId => memberId !== id));
    } else {
      setSelectedMembers([...selectedMembers, id]);
    }
  };

  return (
    <div>
      {selectedMembers.length > 0 && (
        <div className="bg-muted p-4 rounded-lg mb-4 flex justify-between items-center">
          <p>{selectedMembers.length} members selected</p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Mail className="mr-2 h-4 w-4" />
              Send Notification
            </Button>
            <Button variant="outline" size="sm">
              Export
            </Button>
          </div>
        </div>
      )}
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300"
                  checked={selectedMembers.length === members.length}
                  onChange={toggleSelectAll}
                />
              </TableHead>
              <TableHead>Member</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Membership</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300"
                    checked={selectedMembers.includes(member.id)}
                    onChange={() => toggleSelectMember(member.id)}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={member.avatarUrl} alt={member.name} />
                      <AvatarFallback>{member.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{member.name}</div>
                      <div className="text-sm text-muted-foreground">{member.id}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm">
                    <div>{member.email}</div>
                    <div className="text-muted-foreground">{member.phone}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      member.status === "Active" 
                        ? "default" 
                        : member.status === "Inactive" 
                        ? "secondary" 
                        : "destructive"
                    }
                  >
                    {member.status}
                  </Badge>
                </TableCell>
                <TableCell>{member.membershipType}</TableCell>
                <TableCell>{member.joinDate}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem>Edit member</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Send notification</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        Delete member
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}