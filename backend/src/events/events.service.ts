import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaService) {}

  create(CreateEventDto: CreateEventDto){
    return this.prisma.event.create({
      data: {
        ...CreateEventDto, 
        date: new Date(CreateEventDto.date) // date string to date object
      },
    });
  }
}
