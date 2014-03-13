var respawn : Transform;
function OnControllerColliderHit (hit : ControllerColliderHit) {
	    if(hit.collider.gameObject.CompareTag("PlayerAndPipe")){
			transform.position = respawn.position;
    }
}