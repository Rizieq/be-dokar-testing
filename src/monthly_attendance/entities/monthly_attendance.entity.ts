import { Employee } from 'src/employee/entities/employee.entity';
import { PaySlip } from 'src/pay_slip/entities/pay-slip.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('monthly_attendance')
export class MonthlyAttendance {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id_monthly_attendance: number;

  @Column({ type: 'double precision' })
  catering_deduction: number;

  @Column({ type: 'double precision' })
  meal_money: number;

  @Column({ type: 'double precision' })
  total_hour_overtime: number;

  @Column({ type: 'int' })
  attend: number;

  @Column({ type: 'int' })
  permit: number;

  @Column({ type: 'int' })
  alpha: number;

  @Column({ type: 'double precision' })
  half_day: number;

  @Column({ type: 'varchar' })
  salary_period: string;

  @Column({ type: 'double precision' })
  attend_total: number;

  @Column({ type: 'double precision' })
  work_total: number;

  @Column({ type: 'integer' })
  overtime: number;

    // Di entitas MonthlyAttendance:
  @ManyToOne(() => Employee, (employee) => employee.monthlyAttendances)
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;


  // Relasi Many-to-One dengan TotalMonthlyAttendance
  @ManyToOne(() => PaySlip, (PaySlip) => PaySlip.monthlyAttendances)
  @JoinColumn({ name: 'pay_slip_id' })
  paySlip: PaySlip;
}
