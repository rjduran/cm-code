# Unity Examples

This directory contains examples of useful scripts of game mechanics for developing virtual worlds.

Toggle on/off each example by clicking the enable/disable checkbox of with key command **Shift + Option + A** (macOS).

These were built using Unity 2017.3.0f3.

## Phase1VR_Week3

### Example_01

This example demonstrates how to detect triggers using colliders. It also demonstrates how to move an object and a set of lights around with the keyboard arrows.

The trigger methods are used to detect when another object's collider hits them but without use of the physics engine. This means each Cube object being hit by the Sphere object contains a RigidBody component that (Is Kinematic) and contains a Collider that (Is Trigger).

### Example_02

This example demonstrates how to detect collisions using colliders.

The collider methods are used to detect when another object's collider hits them while under the influence of the physics engine. This means each Cube is not a trigger. Cube objects contain colliders and a Sphere object contains both collider and RigidBody under the influence of (Gravity).

### Example_03

This example demonstrates how to detect collisions using colliders.

The collider methods are used to detect when another object's collider hits them while under the influence of the physics engine. This means each object is not a trigger. One Sphere object contains a collider detection and will collide with the other Sphere and the Plane. Both Sphere objects are RigidBodies and under the influence of (Gravity)

### Example_04

This example demonstrates how to detect collisions using colliders.

The collider methods are used to detect when another object's collider hits them while under the influence of the physics engine. This means each object is not a trigger. One Sphere object is using (Gravity) and the other is not, but it (Is Kinematic), which means it's not under the influence of the physics engine, and as such doesn't fall to the floor plane. Both Sphere objects contain colliders which mean they will still collide with each other.

### Example_05

This example demonstrates how to detect triggers using colliders.

The trigger methods are used to detect when another object's collider hits them. Sphere G has a RigidBody component and is setup to use (Gravity), it's collider is not setup to be a trigger. Sphere H is not using gravity but it's collider is set to be a trigger.






