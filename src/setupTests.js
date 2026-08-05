// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }

  observe(element) {
    this.callback(
      [{ isIntersecting: true, intersectionRatio: 1, target: element }],
      this
    );
  }

  unobserve() {}

  disconnect() {}

  takeRecords() {
    return [];
  }
}

global.IntersectionObserver = MockIntersectionObserver;

const matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});

window.matchMedia = matchMedia;
global.matchMedia = matchMedia;
window.scrollTo = jest.fn();
