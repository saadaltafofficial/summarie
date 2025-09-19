import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

// Mock the components used in the Home page
jest.mock("@/components/common/bg-gradient", () => ({
  __esModule: true,
  default: function MockBgGradient() {
    return <div data-testid="bg-gradient" />;
  },
}));

jest.mock("@/components/home/hero-section", () => ({
  __esModule: true,
  default: function MockHeroSection() {
    return <div data-testid="hero-section">Hero Section</div>;
  },
}));

jest.mock("@/components/home/demo-section", () => ({
  __esModule: true,
  default: function MockDemoSection() {
    return <div data-testid="demo-section">Demo Section</div>;
  },
}));

describe("Home Page", () => {
  it("renders all main components", () => {
    render(<Home />);

    // Check if all main components are rendered
    expect(screen.getByTestId("bg-gradient")).toBeInTheDocument();
    expect(screen.getByTestId("hero-section")).toBeInTheDocument();
    expect(screen.getByTestId("demo-section")).toBeInTheDocument();
  });

  it("has the correct layout structure", () => {
    const { container } = render(<Home />);

    // Check the main layout structure
    const mainDiv = container.firstChild as HTMLElement | null;
    expect(mainDiv).toHaveClass("relative", "w-full");

    // Find the content div by its test ID from the mock
    const contentDiv = screen.getByTestId("hero-section")
      .parentElement as HTMLElement | null;
    expect(contentDiv).toHaveClass("flex", "flex-col");
  });
});
