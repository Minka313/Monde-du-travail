const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const email = 'khadimoulbarham@gmail.com';
  const password = 'NoBayeNoLife313';
  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.upsert({
    where: { email },
    update: {
      password: hashedPassword,
      role: 'ULTRA_ADMIN',
      isActive: true,
      isVerified: true,
    },
    create: {
      email,
      password: hashedPassword,
      firstName: 'Khadimoul',
      lastName: 'Barham',
      role: 'ULTRA_ADMIN',
      isActive: true,
      isVerified: true,
    },
  });

  console.log('ULTRA_ADMIN created/updated:', user.email, user.role);

  const adminRole = await prisma.adminRole.upsert({
    where: { name: 'Admin' },
    update: {},
    create: {
      name: 'Admin',
      description: 'Rôle administrateur avec toutes les permissions',
      isSystem: true,
    },
  });

  const allPermissions = await prisma.permission.findMany();
  for (const permission of allPermissions) {
    await prisma.adminRolePermission.upsert({
      where: {
        adminRoleId_permissionId: {
          adminRoleId: adminRole.id,
          permissionId: permission.id,
        },
      },
      update: {},
      create: {
        adminRoleId: adminRole.id,
        permissionId: permission.id,
      },
    });
  }

  await prisma.userAdminRole.upsert({
    where: {
      userId_adminRoleId: {
        userId: user.id,
        adminRoleId: adminRole.id,
      },
    },
    update: {},
    create: {
      userId: user.id,
      adminRoleId: adminRole.id,
      assignedBy: user.id,
    },
  });

  console.log('Admin role assigned to ULTRA_ADMIN');
}

main()
  .catch((e) => {
    console.error('Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
