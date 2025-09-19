import { render, screen } from "@testing-library/react";
import HeroSection from "@/components/home/hero-section";

// Mock the lucide-react components
jest.mock("lucide-react", () => ({
  Sparkles: jest.fn((props) => <svg data-testid="mock-sparkles" {...props} />),
  ArrowRight: jest.fn((props) => (
    <svg data-testid="mock-arrow-right" {...props} />
  )),
}));

// Mock the Button and Badge components
jest.mock("@/components/ui/button", () => ({
  Button: jest.fn(({ children, ...props }) => (
    <button {...props} data-testid="mock-button">
      {children}
    </button>
  )),
}));

jest.mock("@/components/ui/badge", () => ({
  Badge: jest.fn(({ children, ...props }) => (
    <div {...props} data-testid="mock-badge">
      {children}
    </div>
  )),
}));

describe("HeroSection", () => {
  it("renders the AI badge with sparkles icon", () => {
    render(<HeroSection />);

    // Check for the badge text
    const badgeText = screen.getByText("Powered by AI");
    expect(badgeText).toBeInTheDocument();

    // Check for the Sparkles icon
    const sparkles = screen.getByTestId("mock-sparkles");
    expect(sparkles).toBeInTheDocument();
  });

  it("displays the main heading and subheading", () => {
    render(<HeroSection />);

    // Check for the main heading text
    expect(screen.getByText(/Transform PDFs into/)).toBeInTheDocument();
    expect(screen.getByText(/summaries/)).toBeInTheDocument();

    // Check for the subheading
    expect(
      screen.getByText(/Get a beautiful summary reel of document in seconds/)
    ).toBeInTheDocument();
  });

  it("has a call-to-action button that links to login", () => {
    render(<HeroSection />);

    // Check for the CTA button and link
    const ctaButton = screen.getByRole("link", { name: /try summarie/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute("href", "/login");

    // Check for the arrow icon in the button
    const arrowIcon = screen.getByTestId("mock-arrow-right");
    expect(arrowIcon).toBeInTheDocument();
  });

  it("renders the root section element", () => {
    const { container } = render(<HeroSection />);

    // Check the main section exists
    const section = container.firstChild as HTMLElement | null;
    expect(section).toBeInTheDocument();
  });
});
