import { Link } from 'react-router-dom';

function Avatar({ children, className }) {
  return <div className={`rounded-full bg-gray-200 ${className}`}>{children}</div>;
}

function AvatarImage({ src, alt }) {
  return <img className="rounded-full w-full h-full" src={src} alt={alt} />;
}

function AvatarFallback({ children }) {
  return <div className="text-center text-gray-600">{children}</div>;
}

function Card({ children }) {
  return <div className="border p-4 rounded-md shadow-md">{children}</div>;
}

function CardHeader({ children }) {
  return <div className="mb-2">{children}</div>;
}

function CardTitle({ children }) {
  return <h2 className="text-lg font-bold">{children}</h2>;
}

function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}

function Table({ children }) {
  return <table className="w-full border-collapse">{children}</table>;
}

function TableHeader({ children }) {
  return <thead className="bg-gray-100">{children}</thead>;
}

function TableRow({ children }) {
  return <tr className="border-b">{children}</tr>;
}

function TableHead({ children }) {
  return <th className="text-left p-2">{children}</th>;
}

function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

function TableCell({ children }) {
  return <td className="p-2">{children}</td>;
}

function Badge({ children, variant }) {
  const className =
    variant === "secondary"
      ? "bg-green-100 text-green-800"
      : "border border-gray-400 text-gray-600";
  return <span className={`px-2 py-1 rounded ${className}`}>{children}</span>;
}

function Switch({ defaultChecked }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" defaultChecked={defaultChecked} />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600"></div>
    </label>
  );
}

export default function Component() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-6 py-8">
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="w-16 h-16">
          <AvatarImage src="/placeholder-user.jpg" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">John Doe</h1>
          <p className="text-gray-600">Joined June 2021</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-1">
              <div className="text-gray-600">Email</div>
              <a href="mailto:john@example.com" className="text-blue-600 underline">
                john@example.com
              </a>
            </div>
            <div className="grid gap-1">
              <div className="text-gray-600">Phone</div>
              <a href="tel:+1234567890" className="text-blue-600 underline">
                +1 (234) 567-890
              </a>
            </div>
            <div className="grid gap-1">
              <div className="text-gray-600">Address</div>
              <div>
                123 Main St.
                <br />
                Anytown, CA 12345
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Order History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order #</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Link href="#" className="text-blue-600 underline" prefetch={false}>
                      #12345
                    </Link>
                  </TableCell>
                  <TableCell>June 1, 2023</TableCell>
                  <TableCell>$99.99</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Fulfilled</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Link href="#" className="text-blue-600 underline" prefetch={false}>
                      #12346
                    </Link>
                  </TableCell>
                  <TableCell>May 15, 2023</TableCell>
                  <TableCell>$49.99</TableCell>
                  <TableCell>
                    <Badge variant="outline">Refunded</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Link href="#" className="text-blue-600 underline" prefetch={false}>
                      #12347
                    </Link>
                  </TableCell>
                  <TableCell>April 20, 2023</TableCell>
                  <TableCell>$199.99</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Fulfilled</Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Account Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-1">
              <div className="text-gray-600">Username</div>
              <div>johndoe123</div>
            </div>
            <div className="grid gap-1">
              <div className="text-gray-600">Member Since</div>
              <div>June 2021</div>
            </div>
            <div className="grid gap-1">
              <div className="text-gray-600">Last Login</div>
              <div>June 1, 2023</div>
            </div>
            <div className="grid gap-1">
              <div className="text-gray-600">Subscription</div>
              <div>Pro Plan</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-1">
              <div className="text-gray-600">Email Notifications</div>
              <div className="flex items-center gap-2">
                <Switch defaultChecked />
                <span>Receive email updates</span>
              </div>
            </div>
            <div className="grid gap-1">
              <div className="text-gray-600">Push Notifications</div>
              <div className="flex items-center gap-2">
                <Switch />
                <span>Receive push notifications</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
