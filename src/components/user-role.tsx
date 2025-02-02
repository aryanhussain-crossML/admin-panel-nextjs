/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/CPxuVkdhazq
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Rethink_Sans } from 'next/font/google'
import { DM_Sans } from 'next/font/google'

rethink_sans({
  subsets: ['latin'],
  display: 'swap',
})

dm_sans({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"

import { useState } from "react"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function UserRole() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Editor",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "User",
    },
    {
      id: 4,
      name: "Alice Williams",
      email: "alice@example.com",
      role: "User",
    },
  ])
  const [newRole, setNewRole] = useState({
    name: "",
    description: "",
  })
  const handleRoleChange = (userId, newRole) => {
    setUsers((prevUsers) => prevUsers.map((user) => (user.id === userId ? { ...user, role: newRole } : user)))
  }
  const handleSaveChanges = () => {
    console.log("Saved changes:", users)
  }
  const handleNewRoleChange = (field, value) => {
    setNewRole((prevRole) => ({ ...prevRole, [field]: value }))
  }
  const handleCreateNewRole = () => {
    console.log("New role:", newRole)
    setNewRole({ name: "", description: "" })
  }
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <h1 className="text-2xl font-bold mb-6">User Roles</h1>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        {user.role} <ChevronDownIcon className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuRadioGroup
                        value={user.role}
                        onValueChange={(newRole) => handleRoleChange(user.id, newRole)}
                      >
                        <DropdownMenuRadioItem value="Admin">Admin</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Editor">Editor</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="User">User</DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    Save
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Create New Role</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="role-name">Role Name</Label>
            <Input
              id="role-name"
              placeholder="Enter role name"
              value={newRole.name}
              onChange={(e) => handleNewRoleChange("name", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role-description">Description</Label>
            <Textarea
              id="role-description"
              placeholder="Enter role description"
              value={newRole.description}
              onChange={(e) => handleNewRoleChange("description", e.target.value)}
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <Button onClick={handleCreateNewRole}>Create Role</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}
