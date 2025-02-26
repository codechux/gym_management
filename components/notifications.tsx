import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

const notifications = [
  {
    id: "NT001",
    member: "John Smith",
    type: "Payment Reminder",
    status: "Sent",
    date: "Oct 24, 2023",
  },
  {
    id: "NT002",
    member: "Sarah Johnson",
    type: "Membership Expiry",
    status: "Sent",
    date: "Oct 23, 2023",
  },
  {
    id: "NT003",
    member: "Michael Chen",
    type: "Class Cancellation",
    status: "Failed",
    date: "Oct 22, 2023",
  },
  {
    id: "NT004",
    member: "Emily Rodriguez",
    type: "Special Offer",
    status: "Sent",
    date: "Oct 21, 2023",
  },
  {
    id: "NT005",
    member: "David Kim",
    type: "Payment Reminder",
    status: "Pending",
    date: "Oct 20, 2023",
  },
];

export function Notifications() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Member</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {notifications.map((notification) => (
          <TableRow key={notification.id}>
            <TableCell className="font-medium">{notification.id}</TableCell>
            <TableCell>{notification.member}</TableCell>
            <TableCell>{notification.type}</TableCell>
            <TableCell>
              <Badge 
                variant={
                  notification.status === "Sent" 
                    ? "default" 
                    : notification.status === "Failed" 
                    ? "destructive" 
                    : "outline"
                }
              >
                {notification.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">{notification.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}