import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PatientCard, PatientCardProps } from './PatientCard';

describe('PatientCard', () => {
  test('renders PatientCard component with correct details', () => {
    const mockProps: PatientCardProps = {
      id: 1,
      name: 'John Doe',
      age: 30,
      gender: "M"
    };

    render(<PatientCard {...mockProps} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('ID:')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Age:')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
    expect(screen.getByText('Gender:')).toBeInTheDocument();
    expect(screen.getByText('M')).toBeInTheDocument();
  });
});