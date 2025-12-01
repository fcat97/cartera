export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card/50 border-t mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} UqabMedia. All rights reserved.</p>
      </div>
    </footer>
  );
}
