# Contributing to Passport UI

Thank you for your interest in contributing to passport-ui! We welcome contributions from the community.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Contributing Guidelines](#contributing-guidelines)
- [Submitting Changes](#submitting-changes)
- [Component Development](#component-development)
- [Testing](#testing)
- [Documentation](#documentation)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Getting Started

### Prerequisites

- Node.js >= 22.0.0
- npm or yarn package manager
- Git

### Development Setup

1. **Fork and clone the repository**

   ```bash
   git clone https://github.com/your-username/passport-ui.git
   cd passport-ui
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development mode**

   ```bash
   npm run dev
   ```

4. **Start Storybook for component development**
   ```bash
   npm run storybook
   ```

## Project Structure

```
passport-ui/
├── src/
│   ├── components/          # UI components
│   ├── motion-primitives/   # Animation components
│   ├── composables/         # Higher-level composable components
│   ├── containers/          # Page-level containers
│   ├── theme/              # Theme components and utilities
│   ├── lib/                # Utility functions
│   ├── index.ts            # Main exports
│   └── styles.css          # Global styles and theme
├── .storybook/             # Storybook configuration
└── dist/                   # Build output
```

## Contributing Guidelines

### Issues

- Search existing issues before creating a new one
- Use the provided issue templates when available
- Provide clear reproduction steps for bugs
- Include relevant system information

### Pull Requests

1. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the existing code style and patterns
   - Add tests for new functionality
   - Update documentation as needed

3. **Test your changes**

   ```bash
   npm run lint
   npm run type-check
   npm run build
   ```

4. **Commit your changes**

   ```bash
   git commit -m "feat: add new component"
   ```

   Use conventional commit messages:
   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation changes
   - `style:` for formatting changes
   - `refactor:` for code refactoring
   - `test:` for adding tests
   - `chore:` for maintenance tasks

5. **Push and create a pull request**
   ```bash
   git push origin feature/your-feature-name
   ```

## Component Development

### Creating New Components

1. **Follow the established patterns**
   - Use TypeScript for all components
   - Follow the existing file structure
   - Use Radix UI primitives when available
   - Implement proper accessibility

2. **Component Structure**

   ```typescript
   import React from "react"
   import { cva } from "class-variance-authority"
   import { cn } from "../../lib/utils"

   const componentVariants = cva(
     "base-classes",
     {
       variants: {
         variant: {
           default: "default-classes",
           secondary: "secondary-classes"
         }
       },
       defaultVariants: {
         variant: "default"
       }
     }
   )

   interface ComponentProps extends React.HTMLAttributes<HTMLElement> {
     variant?: "default" | "secondary"
   }

   const Component = React.forwardRef<HTMLElement, ComponentProps>(
     ({ className, variant, ...props }, ref) => {
       return (
         <element
           ref={ref}
           className={cn(componentVariants({ variant }), className)}
           {...props}
         />
       )
     }
   )
   Component.displayName = "Component"

   export { Component, componentVariants }
   export type { ComponentProps }
   ```

3. **Add Storybook stories**
   - Create a `.stories.tsx` file for each component
   - Include multiple variants and use cases
   - Add documentation and controls

4. **Export the component**
   - Add to appropriate entry file (`index.ts`)
   - Follow the existing export patterns

### Styling Guidelines

- Use Tailwind CSS classes with the `cn()` utility
- Follow the existing color system and design tokens
- Support both light and dark themes
- Use CSS custom properties defined in `styles.css`
- Ensure responsive design

### Accessibility

- Follow WCAG 2.1 AA guidelines
- Use proper ARIA attributes
- Ensure keyboard navigation
- Test with screen readers
- Provide proper focus management

## Testing

### Running Tests

```bash
# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix

# Build verification
npm run build
```

### Testing Guidelines

- Test component functionality
- Verify accessibility features
- Test responsive behavior
- Check theme switching
- Validate TypeScript types

## Documentation

### Component Documentation

- Add JSDoc comments for all public APIs
- Include usage examples in Storybook
- Document props and their types
- Provide accessibility notes

### README Updates

- Update component lists when adding new components
- Keep installation and usage instructions current
- Add examples for new features

## Release Process

**Note**: Only maintainers can publish releases. Contributors should not run publishing commands.

1. Changes are reviewed and merged to main
2. Maintainers update version and changelog
3. Release is published to npm
4. GitHub release is created

## Getting Help

- Check existing [issues](https://github.com/praveentcom/passport-ui/issues)
- Review [documentation](https://github.com/praveentcom/passport-ui#readme)
- Look at existing components for patterns
- Ask questions in GitHub discussions

## Recognition

Contributors will be recognized in:

- GitHub contributors list
- Release notes for significant contributions
- Special thanks in documentation

Thank you for contributing to passport-ui! 🎉
