const prisma = require('../config/database');
const { NotFoundError, BadRequestError } = require('../utils/errors');

class EventService {
  static async getAllEvents(type, page = 1, limit = 20) {
    const where = type ? { type } : {};
    const skip = (page - 1) * limit;

    const [events, total] = await Promise.all([
      prisma.event.findMany({
        where,
        skip,
        take: limit,
        orderBy: { eventDate: 'asc' },
      }),
      prisma.event.count({ where }),
    ]);

    return {
      events,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    };
  }

  static async getEventById(id) {
    const event = await prisma.event.findUnique({
      where: { id },
    });

    if (!event) {
      throw new NotFoundError('Événement non trouvé');
    }

    return event;
  }

  static async createEvent(data, userId) {
    const event = await prisma.event.create({
      data: {
        ...data,
        createdById: userId,
      },
    });

    return event;
  }

  static async updateEvent(id, data) {
    const event = await prisma.event.update({
      where: { id },
      data,
    });

    return event;
  }

  static async deleteEvent(id) {
    await prisma.event.delete({
      where: { id },
    });
  }
}

module.exports = EventService;