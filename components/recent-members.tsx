import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const recentMembers = [
  {
    name: "John Smith",
    email: "john.smith@example.com",
    joinDate: "Oct 24, 2023",
    avatar: "JS",
    avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop&auto=format",
  },
  {
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    joinDate: "Oct 22, 2023",
    avatar: "SJ",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&auto=format",
  },
  {
    name: "Michael Chen",
    email: "m.chen@example.com",
    joinDate: "Oct 20, 2023",
    avatar: "MC",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&auto=format",
  },
  {
    name: "Emily Rodriguez",
    email: "emily.r@example.com",
    joinDate: "Oct 18, 2023",
    avatar: "ER",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&auto=format",
  },
  {
    name: "David Kim",
    email: "david.k@example.com",
    joinDate: "Oct 15, 2023",
    avatar: "DK",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&auto=format",
  },
];

export function RecentMembers() {
  return (
    <div className="space-y-4">
      {recentMembers.map((member) => (
        <div key={member.email} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={member.avatarUrl} alt={member.name} />
            <AvatarFallback>{member.avatar}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{member.name}</p>
            <p className="text-sm text-muted-foreground">{member.email}</p>
          </div>
          <div className="ml-auto text-sm text-muted-foreground">
            {member.joinDate}
          </div>
        </div>
      ))}
    </div>
  );
}