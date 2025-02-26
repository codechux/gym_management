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
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, RefreshCw } from "lucide-react";

const allNotifications = [
  {
    id: "NT001",
    title: "Payment Reminder",
    recipient: "John Smith",
    type: "Email",
    status: "Sent",
    date: "Oct 24, 2023",
  },
  {
    id: "NT002",
    title: "Membership Expiry",
    recipient: "Sarah Johnson",
    type: "SMS",
    status: "Sent",
    date: "Oct 23, 2023",
  },
  {
    id: "NT003",
    title: "Class Cancellation",
    recipient: "Michael Chen",
    type: "Email",
    status: "Failed",
    date: "Oct 22, 2023",
  },
  {
    id: "NT004",
    title: "Special Offer",
    recipient: "Emily Rodriguez",
    type: "Email",
    status: "Sent",
    date: "Oct 21, 2023",
  },
  {
    id: "NT005",
    title: "Payment Reminder",
    recipient: "David Kim",
    type: "SMS",
    status: "Pending",
    date: "Oct 20, 2023",
  },
  {
    id: "NT006",
    title: "New Class Schedule",
    recipient: "Jessica Lee",
    type: "Email",
    status: "Sent",
    date: "Oct 19, 2023",
  },
  {
    id: "NT007",
    title: "Membership Renewal",
    recipient: "Robert Taylor",
    type: "Email",
    status: "Sent",
    date: "Oct 18, 2023",
  },
  {
    id: "NT008",
    title: "Holiday Hours",
    recipient: "Amanda Wilson",
    type: "SMS",
    status: "Failed",
    date: "Oct 17, 2023",
  },
  {
    id: "NT009",
    title: "Gym Maintenance",
    recipient: "All Members",
    type: "Email",
    status: "Sent",
    date: "Oct 16, 2023",
  },
  {
    id: "NT010",
    title: "New Equipment",
    recipient: "Premium Members",
    type: "Email",
    status: "Pending",
    date: "Oct 15, 2023",
  },
];

interface NotificationsListProps {
  status?: "Sent" | "Pending" | "Failed";
}

export function NotificationsList({ status }: NotificationsListProps) {
  const [selectedNotifications, setSelectedNotifications] = useState<string[]>([]);
  
  const notifications = status 
    ? allNotifications.filter(notification => notification.status === status)
    : allNotifications;

  const toggleSelectAll = () => {
    if (selectedNotifications.length === notifications.length) {
      setSelectedNotifications([]);
    } else {
      setSelectedNotifications(notifications.map(notification => notification.id));
    }
  };

  const toggleSelectNotification = (id: string) => {
    if (selectedNotifications.includes(id)) {
      setSelectedNotifications(selectedNotifications.filter(notificationId => notificationId !== id));
    } else {
      setSelectedNotifications([...selectedNotifications, id]);
    }
  };

  return (
    <div>
      {selectedNotifications.length > 0 && (
        <div className="bg-muted p-4 rounded-lg mb-4 flex justify-between items-center">
          <p>{selectedNotifications.length} notifications selected</p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <RefreshCw className="mr-2 h-4 w-4" />
              Resend
            </Button>
            <Button variant="outline" size="sm">
              Delete
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
                  checked={selectedNotifications.length === notifications.length && notifications.length > 0}
                  onChange={toggleSelectAll}
                />
              </TableHead>
              <TableHead>ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Recipient</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {notifications.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-6 text-muted-foreground">
                  No notifications found
                </TableCell>
              </TableRow>
            ) : (
              notifications.map((notification) => (
                <TableRow key={notification.id}>
                  <TableCell>
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300"
                      checked={selectedNotifications.includes(notification.id)}
                      onChange={() => toggleSelectNotification(notification.id)}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{notification.id}</TableCell>
                  <TableCell>{notification.title}</TableCell>
                  <TableCell>{notification.recipient}</TableCell>
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
                  <TableCell>{notification.date}</TableCell>
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
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Resend</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}