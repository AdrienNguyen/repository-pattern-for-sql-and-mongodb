import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class UserSQL extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'username', type: 'varchar', length: 255, nullable: true })
  username: string;

  @Column({ name: 'email', type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ name: 'password', type: 'text', nullable: true, select: false })
  password: string;

  @Column({
    name: 'activation_code_id',
    type: 'integer',
    width: 11,
    nullable: true,
  })
  activationCodeId: number;

  @Column({
    name: 'wallet_address',
    type: 'varchar',
    width: 255,
  })
  walletAddress: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
