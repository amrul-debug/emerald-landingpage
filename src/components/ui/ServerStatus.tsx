import React, { useState, useEffect } from 'react';
import { cn } from '../../utils/cn';
import { Users } from 'lucide-react';
import { serverAPI } from '../../services/api';

interface ServerStatusProps {
  className?: string;
}

const ServerStatus: React.FC<ServerStatusProps> = ({ className }) => {
  const [isOnline, setIsOnline] = useState(false);
  const [playerCount, setPlayerCount] = useState<number>(0);
  const [maxPlayers, setMaxPlayers] = useState<number>(0);

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        const serverData = await serverAPI.getStatus();
        if (serverData) {
          setIsOnline(true);
          setPlayerCount(serverData.pc);
          setMaxPlayers(serverData.pm);
        } else {
          setIsOnline(false);
          setPlayerCount(0);
          setMaxPlayers(0);
        }
      } catch (error) {
        console.error('Failed to fetch server status:', error);
        setIsOnline(false);
        setPlayerCount(0);
        setMaxPlayers(0);
      }
    };

    fetchServerStatus();
    const interval = setInterval(fetchServerStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  const statusColor = isOnline ? 'bg-green-500' : 'bg-red-500';
  const playerPercentage = maxPlayers > 0 ? (playerCount / maxPlayers) * 100 : 0;

  return (
    <div className={cn('flex items-center space-x-3', className)}>
      <div className="flex items-center">
        <div className={cn('h-2.5 w-2.5 rounded-full mr-1.5', statusColor, 'animate-pulse')}></div>
        <span className="text-sm font-medium">
          {isOnline ? 'Online' : 'Offline'}
        </span>
      </div>

      {isOnline && (
        <div className="flex items-center">
          <Users size={16} className="mr-1.5" />
          <div className="flex flex-col">
            <span className="text-sm font-medium">{playerCount}/{maxPlayers}</span>
            <div className="w-24 h-1.5 bg-gray-200 rounded-full mt-1">
              <div
                className="h-full bg-emerald-500 rounded-full"
                style={{ width: `${playerPercentage}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServerStatus;