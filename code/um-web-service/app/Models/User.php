<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Str;
use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use Notifiable;

    use HasApiTokens;

    use HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * format date_last_paid
     * @return string
     */
    public function lastLoginFormat()
    {
        return $this->last_login ? Carbon::parse($this->last_login)->format('d/m/Y') : "N/A";
    }

    public function getStatus()
    {
        $status = "unknown";

        // 0:inactive 1:active 2:suspended 3:archived
        if ($this->status == 0) {
            $status = "inactive";
        }
        if ($this->status == 1) {
            $status = "active";
        }
        if ($this->status == 2) {
            $status = "suspended";
        }
        if ($this->status == 3) {
            $status = "archived";
        }

        return $status;
    }

    public function isActivateAllowed()
    {
        return $this->status == 0 || $this->status == 2;
    }

    public function isSuspendAllowed()
    {
        return $this->status == 1;
    }

    public function isArchiveAllowed()
    {
        return $this->status == 2;
    }

    public function isDeleteAllowed()
    {
        return $this->status == 3;
    }

    public function isReinstateAllowed()
    {
        return $this->status == 3;
    }

    /**
     * Scope a query to only include given keywords.
     *  query from numner/title/summary
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param  $keywords
     */
    public function scopeKeyWords($query, $keywords)
    {
        if ($keywords) $query->where('name', 'like', '%' . $keywords . '%')
            ->orWhere('email', 'like', '%' . $keywords . '%')
            ->orWhere('phone', 'like', '%' . $keywords . '%')
            ->orWhere('position', 'like', '%' . $keywords . '%');
    }

    /**
     * activate user
     */
    public function activate()
    {
        // 0:inactive 1:active 2:suspended 3:archived
        if ($this->status != 1) {
            $this->status = 1;
            $this->save();
        }
    }

    /**
     * suspend user account
     */
    public function suspend()
    {
        // 0:inactive 1:active 2:suspended 3:archived
        if ($this->status != 2) {
            $this->status = 2;
            $this->save();
        }
    }

    /**
     * archive user
     */
    public function archive()
    {
        // 0:inactive 1:active 2:suspended 3:archived
        if ($this->status != 3) {
            $this->status = 3;
            $this->save();
        }
    }

    /**
     * reinstate user
     */
    public function reinstate()
    {
        // 0:inactive 1:active 2:suspended 3:archived
        if ($this->status != 0) {
            $this->status = 0;
            $this->save();
        }
    }

    /**
     * Scope a query to only include given status.
     *  query from numner/title/summary
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param  $status
     */
    public function scopeStatus($query, $status)
    {
        $query->where('status', $status);
    }

    /**
     * Scope a query to only include given status.
     *  query from numner/title/summary
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param  array $status
     */
    public function scopeStatusIn($query, $status)
    {
        $query->whereIn('status', $status);
    }

    /**
     * Scope a query to not include given status.
     *  query from numner/title/summary
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param  $status
     */
    public function scopeStatusNot($query, $status)
    {
        $query->where('status', '!=', $status);
    }


    /**
     * Get the avatar that belongs to this User.
     */
    public function avatar()
    {
        return $this->belongsTo(Resource::class);
    }

    /**
     * Get the studentIdImage that belongs to this User.
     */
    public function studentIdImage()
    {
        return $this->belongsTo(Resource::class);
    }

    /**
     * Get the university that belongs to this User.
     */
    public function university()
    {
        return $this->belongsTo(University::class);
    }

    public function getEmail()
    {
        return Str::limit($this->email, 20);
    }

    public function hostedEvents()
    {
        return $this->hasMany(Event::class,'poster_id')->where('poster_id', $this->id);
    }

    public function joinedEvents()
    {
        return $this->belongsToMany(Event::class,'event_attendees', 'attendee_id', 'event_id')->where('attendee_id', $this->id);
    }
}
