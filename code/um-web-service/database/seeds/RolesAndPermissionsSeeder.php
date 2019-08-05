<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
    public function run()
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions

        // event
        Permission::create(['name' => 'manage-event']);
        Permission::create(['name' => 'add-event']);
        Permission::create(['name' => 'edit-event']);
        Permission::create(['name' => 'view-event']);
        Permission::create(['name' => 'suspend-event']);
        Permission::create(['name' => 'publish-event']);
        Permission::create(['name' => 'delete-event']);

        // user
        Permission::create(['name' => 'manage-user']); // menu entry control
        Permission::create(['name' => 'add-user']);
        Permission::create(['name' => 'edit-user']);
        Permission::create(['name' => 'view-user']);
        Permission::create(['name' => 'activate-user']);
        Permission::create(['name' => 'suspend-user']);
        Permission::create(['name' => 'archive-user']);
        Permission::create(['name' => 'reinstate-user']);
        Permission::create(['name' => 'delete-user']);
        Permission::create(['name' => 'resetpass-user']);

        // create roles and assign created permissions
        $super_admin = Role::create(['name' => 'super-admin']);
        $super_admin->givePermissionTo(Permission::all());

        $student = Role::create(['name' => 'student']);
        $student->givePermissionTo(['add-event','edit-event','view-event']);
    }
}