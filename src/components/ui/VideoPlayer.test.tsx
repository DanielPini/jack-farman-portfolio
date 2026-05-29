import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import VideoPlayer from "./VideoPlayer";

beforeEach(() => {
  window.HTMLMediaElement.prototype.load = vi.fn();
  window.HTMLMediaElement.prototype.play = vi.fn().mockResolvedValue(undefined);
  window.HTMLMediaElement.prototype.pause = vi.fn();
});

afterEach(() => {
  vi.restoreAllMocks();
});

const mockProjects = [
  {
    id: 1,
    title: "Project 1",
    type: "video" as const,
    media: "/videos/project1.mp4",
    year: 2024,
    category: "Film",
  },
  {
    id: 2,
    title: "Project 2",
    type: "video" as const,
    media: "/videos/project2.mp4",
    year: 2024,
    category: "Film",
  },
  {
    id: 3,
    title: "Project 3",
    type: "video" as const,
    media: "/videos/project3.mp4",
    year: 2024,
    category: "Film",
  },
];

describe("VideoPlayer", () => {
  describe("Rendering", () => {
    it("should render without crashing", () => {
      const { container } = render(<VideoPlayer projects={mockProjects} />);
      expect(container.querySelector(".video-player")).toBeTruthy();
    });

    it("should render three video elements for three projects", () => {
      const { container } = render(<VideoPlayer projects={mockProjects} />);
      const videos = container.querySelectorAll("video");
      expect(videos.length).toBe(3);
    });

    it("should display all project titles", () => {
      render(<VideoPlayer projects={mockProjects} />);
      expect(screen.getByText("Project 1")).toBeTruthy();
      expect(screen.getByText("Project 2")).toBeTruthy();
      expect(screen.getByText("Project 3")).toBeTruthy();
    });

    it("should display metadata for each project", () => {
      render(<VideoPlayer projects={mockProjects} />);
      const metaItems = screen.getAllByText("2024 • Film");
      expect(metaItems.length).toBe(3);
    });

    it("should place title and meta inside each video window", () => {
      const { container } = render(<VideoPlayer projects={mockProjects} />);
      const wrappers = container.querySelectorAll(".video-window-wrapper");
      expect(wrappers.length).toBe(3);
      wrappers.forEach((wrapper) => {
        expect(wrapper.querySelector(".video-info-overlay")).toBeTruthy();
        expect(wrapper.querySelector(".video-title")).toBeTruthy();
        expect(wrapper.querySelector(".video-meta")).toBeTruthy();
      });
    });
  });

  describe("Video attributes", () => {
    it("should have autoPlay, loop, and muted on every video", () => {
      const { container } = render(<VideoPlayer projects={mockProjects} />);
      const videos = container.querySelectorAll("video");
      videos.forEach((video) => {
        expect(video.hasAttribute("autoplay")).toBeTruthy();
        expect(video.hasAttribute("loop")).toBeTruthy();
        expect((video as HTMLVideoElement).muted).toBeTruthy();
      });
    });

    it("should set correct src on each video", () => {
      const { container } = render(<VideoPlayer projects={mockProjects} />);
      const videos = container.querySelectorAll("video");
      expect(videos[0].getAttribute("src")).toBe("/videos/project1.mp4");
      expect(videos[1].getAttribute("src")).toBe("/videos/project2.mp4");
      expect(videos[2].getAttribute("src")).toBe("/videos/project3.mp4");
    });

    it("should call play() on mount for each video", () => {
      render(<VideoPlayer projects={mockProjects} />);
      expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(3);
    });
  });

  describe("Edge cases", () => {
    it("should return null for empty project list", () => {
      const { container } = render(<VideoPlayer projects={[]} />);
      expect(container.firstChild).toBeNull();
    });

    it("should return null when no video-type projects exist", () => {
      const nonVideoProjects = [
        {
          id: 1,
          title: "Image Project",
          type: "image" as const,
          media: "/images/project.jpg",
          year: 2024,
          category: "Photo",
        },
      ];
      const { container } = render(<VideoPlayer projects={nonVideoProjects} />);
      expect(container.firstChild).toBeNull();
    });

    it("should render only up to 3 videos even with more projects", () => {
      const extraProjects = [
        ...mockProjects,
        {
          id: 4,
          title: "Project 4",
          type: "video" as const,
          media: "/videos/project4.mp4",
          year: 2024,
          category: "Film",
        },
      ];
      const { container } = render(<VideoPlayer projects={extraProjects} />);
      expect(container.querySelectorAll("video").length).toBe(3);
    });

    it("should filter out non-video projects", () => {
      const mixedProjects = [
        ...mockProjects,
        {
          id: 4,
          title: "Image Project",
          type: "image" as const,
          media: "/images/project.jpg",
          year: 2024,
          category: "Photo",
        },
      ];
      render(<VideoPlayer projects={mixedProjects} />);
      expect(screen.queryByText("Image Project")).toBeNull();
    });
  });
});
