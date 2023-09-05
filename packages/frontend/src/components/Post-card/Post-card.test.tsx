import PostCard from ".";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Posts } from "types";
const post: Posts =
  {
    "id": 1,
    "title": "Sample blog post title",
    "category": "Sample category",
    "date": "21 Jan 2023",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "image":"/blog-image.png",
    "author": "sample author",
    "avatar":"/avatar.png"
  };



describe('WorkCard component', () => {

  it('Recieves blog title prop ', () => {
    render(<PostCard post={post}/>)
    const bTitle = screen.getByTestId('bTitle-data').textContent;
    expect(bTitle).toBe("Sample blog post title");
  });

  it('Recieves blog category prop ', () => {
    render(<PostCard post={post}/>)
    const bCategory = screen.getByTestId('bCategory-data').textContent;
    expect(bCategory).toBe("Sample category");
  });

  it('Recieves blog date prop ', () => {
    render(<PostCard post={post}/>)
    const bDate = screen.getByTestId('bDate-data').textContent;
    expect(bDate).toBe("21 Jan 2023");
  });

  it('Recieves blog text prop ', () => {
    render(<PostCard post={post}/>)
    const bText = screen.getByTestId('bText-data').textContent;
    expect(bText).toBe("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
  });

  it('Recieves blog author prop ', () => {
    render(<PostCard post={post}/>)
    const bAuthor = screen.getByTestId('bAuthor-data').textContent;
    expect(bAuthor).toBe("samle author");
  });

});
